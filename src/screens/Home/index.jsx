import React, {useCallback, useState} from 'react';
import WrapperScreen from '../../components/global/WrapperScreen';
import TextCustom from '../../components/global/TextCustom';
import Gap from '../../components/global/Gap';
import TextInputCustom from '../../components/global/TextInputCustom';
import {FlatList} from 'react-native-gesture-handler';
import {replaceSpaceWithPlus} from '../../utils/helpers';
import {getDataSearchWithParams} from '../../utils/services';
import ItemMusic from '../../components/screens/Home/ItemMusic';
import {useNavigation} from '@react-navigation/native';
import ItemMusicSkeleton from '../../components/screens/Home/ItemMusicSkeleton';
import {ActivityIndicator, StyleSheet, ToastAndroid, View} from 'react-native';
import FilteredBy from '../../components/screens/Home/FilteredBy';

const Home = () => {
  const navigation = useNavigation();
  const [searchVal, setSearchVal] = useState('');
  const [dataSearchResult, setDataSearchResult] = useState([]);
  const [limit, setLimit] = useState(30);
  const [initial, setInitial] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState('song');

  const getDataMusic = useCallback(async params => {
    try {
      setInitial(true);
      let res = await getDataSearchWithParams(params);
      setDataSearchResult(res.data.results);
      setInitial(false);
      setRefreshing(false);
    } catch (error) {
      ToastAndroid.show('Error getting the data', ToastAndroid.SHORT);
      setInitial(false);
      setRefreshing(false);
    }
  }, []);
  const handleEnter = async () => {
    if (searchVal.length === 0) {
      ToastAndroid.show('Text must be entered', ToastAndroid.SHORT);
      return;
    }
    getDataMusic({
      entity: filter === 'artist' ? 'musicArtist' : 'song',
      term: replaceSpaceWithPlus(searchVal),
      limit: limit,
    });
    setSearchVal('');
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getDataMusic({
      entity: 'song',
      term: replaceSpaceWithPlus('jack'),
      limit: limit,
    });
  }, []);

  const loadMoreData = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setLimit(limit + 5);
      setTimeout(async () => {
        const res = await getDataSearchWithParams({
          entity: 'song',
          term: replaceSpaceWithPlus(searchVal ?? 'jack'),
          limit: limit,
        });
        setDataSearchResult(prevData => [...prevData, ...res.data.results]);
        setLoadingMore(false);
      }, 500);
    }
  };

  let content;

  if (initial) {
    content = <LoadingSkeleton />;
  } else {
    if (dataSearchResult.length !== 0) {
      content = (
        <FlatList
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          data={dataSearchResult}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <ItemMusic
              data={item}
              onPress={() => {
                navigation.navigate('Detail', {data: item});
              }}
            />
          )}
          onRefresh={onRefresh}
          refreshing={refreshing}
          // onEndReached={loadMoreData}
          // ListFooterComponent={RenderFooter}
          // onEndReachedThreshold={1}
        />
      );
    } else {
      content = (
        <View style={styles.wrapEmptyData}>
          <TextCustom variant="small">Data Not Found</TextCustom>
        </View>
      );
    }
  }

  return (
    <WrapperScreen>
      <Gap height={64} />
      <TextCustom style={{textAlign: 'center'}} variant="large">
        Search
      </TextCustom>
      <Gap height={24} />
      <FilteredBy
        filter={filter}
        onChangeFilter={val => {
          setFilter(val);
        }}
      />
      <Gap height={24} />
      <TextInputCustom
        placeholder="Entered artist or song name"
        // leftIcon={'search'}
        rightIcon={'search'}
        onRightIconPress={handleEnter}
        onChangeText={text => setSearchVal(text)}
        value={searchVal}
        onSubmitEditing={handleEnter}
      />
      <Gap height={20} />

      {content}
    </WrapperScreen>
  );

  function LoadingSkeleton() {
    return [1, 1, 1, 1, 1, 1].map(() => <ItemMusicSkeleton />);
  }

  function RenderFooter() {
    return loadingMore ? (
      <View style={{marginTop: 12, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="white" />
      </View>
    ) : null;
  }
};

const styles = StyleSheet.create({
  wrapEmptyData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;

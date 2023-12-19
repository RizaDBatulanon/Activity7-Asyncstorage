import React from 'react';
import { View } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const Table1 = ({ dataList, onViewData }) => { 
  const tableHead = ['#', 'FIRST NAME', 'LAST NAME', 'COURSE'];

  return (
    <View style={{ marginTop: 20, justifyContent: 'flex-start', flex: 1, marginHorizontal: 100 }}>
      <Table borderStyle={{ borderWidth: 5, borderColor: '#A908B5' }} style={{ marginTop: 10, width: '100%' }}>
        <Row
          data={tableHead}
          style={{ height: 60, backgroundColor: '#FF8B28', width: '100%' }}
          textStyle={{ margin: 10, textAlign: 'center', color: 'white' }}
        />
        {dataList.map((data, index) => (
          <Row
            key={index}
            data={[index + 1, data.firstName, data.lastName, data.selectedCourse]}
            style={{ height: 50 }}
            textStyle={{
              margin: 1,
              textAlign: 'center',
              flexWrap: 'wrap',
              color: '#fff',
              fontFamily: 'Montserrat',
              lineHeight: '5.0',
            }}
            onPress={() => onViewData(index)}
          />
        ))}
      </Table>
    </View>
  );
};

export default Table1;
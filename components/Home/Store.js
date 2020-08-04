import {observable, action} from 'mobx';
class Store {
  @observable weatherData = '';
  @observable country = [];
  @observable listItem = [];
  @observable queryData = '';
  @observable defaultData = 'Hyderabad';

  @action onChangeText = (val) => {
    this.queryData = val;
  };
}
export default new Store();

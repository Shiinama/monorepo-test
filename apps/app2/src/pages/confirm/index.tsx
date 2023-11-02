import { Form, View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import Test1 from '~/test1'
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎来到确认页。</View>
      <View className="index">
        <Form>
          <View>本人姓名</View>
        </Form>
        <Test1 />
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
    </View>
  )
}

export default Index

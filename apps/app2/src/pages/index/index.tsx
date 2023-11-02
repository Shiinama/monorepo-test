import React from 'react'
import { Button } from '@nutui/nutui-react-taro'
import { navigateTo } from '@tarojs/taro'
import { Form, View } from '@tarojs/components'
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎来到app2。</View>
      <View className="index">
        <Form>
          <View>本人姓名</View>
        </Form>
        <Button
          onClick={() =>
            navigateTo({
              url: '/pages/confirm/index',
            })
          }
          type="primary"
          className="btn"
        >
          NutUI React Button
        </Button>
      </View>
    </View>
  )
}

export default Index

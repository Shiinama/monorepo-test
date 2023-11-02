import React from 'react'
import { Form, View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎来到app2。</View>
      <View className="index">
        <Form>
          <Button type="primary" className="btn">
            NutUI React
          </Button>
        </Form>
      </View>
    </View>
  )
}

export default Index

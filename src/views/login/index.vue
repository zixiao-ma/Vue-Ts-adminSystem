<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_left">
        <h1 class="title">欢迎登录</h1>
      </div>
      <div class="login_form">

        <h2>后台管理系统</h2>
        <a-form
            :label-col="{ span: 0 }"
            :model="formState"
            :wrapper-col="{ span: 24 }"
            autocomplete="off"
            name="basic"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
          <a-form-item
              :rules="[{ required: true, message: '用户名或账户不能为空!' }]"
              name="userName"
          >
            <a-input v-model:value="formState.userName" placeholder="请输入账户名">

              <template #prefix>
                <user-outlined type="user"/>
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
              :rules="[{ required: true, message: '密码不能为空!' }]"
              name="userPwd"
          >
            <a-input-password v-model:value="formState.userPwd" placeholder="请输入密码">
              <template #prefix>
                <lock-outlined/>
              </template>

            </a-input-password>
          </a-form-item>


          <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
            <a-button :loading="loading" block html-type="submit" type="primary">{{ loginButtonText }}</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {loginType} from '@/typeing/user';
import {useStore} from 'vuex';
import {message} from 'ant-design-vue';
import {useRouter} from 'vue-router';

const store = useStore();
const router = useRouter();
const loading = ref<boolean>(false);
const loginButtonText = ref<string>('立即登录');
const formState = reactive<loginType>({
  userName: '',
  userPwd: ''
});
const onFinish = async (values: any) => {
  loading.value = true;
  loginButtonText.value = '登录中...';
  try {
    const res = await store.dispatch('user/login', formState);
    if (res) {
      await router.push({name: 'Home'});
      message.success('登录成功！');
    }
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
  loginButtonText.value = '立即登录';
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>
<style lang="scss" scoped>
.login_container {
  background: url("../../../public/bgc.jpeg") no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_box {
  width: 800px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;

  & > div {
    flex: 1;

    &:first-child {
      background: linear-gradient(135deg, #17ead9, #6078ea);
    }

    &:last-child {
      border: 1px solid #ddd;
      border-radius: 0 10px 10px 0;
    }
  }
}

.title {
  color: #fff;
  text-align: center;
}

.login_form {
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.ant-form {
  width: 90%;
}

.login_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

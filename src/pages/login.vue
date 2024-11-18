<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { themeConfig } from '@themeConfig'
import axios from 'axios'
import { VForm } from 'vuetify/components/VForm'
const themes = [
  {
    name: 'light',
    icon: 'tabler-sun-high',
  },
  {
    name: 'dark',
    icon: 'tabler-moon-stars',
  },
  {
    name: 'system',
    icon: 'tabler-device-desktop-analytics',
  },
]
const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
// const ability = useAbility()

const errors = ref({
  username: undefined,
  password: undefined,
})
const Messageres = ref('')
const alerDialogSuccess = ref(false)
const alerDialogFault = ref(false)
const refVForm = ref()

const credentials = ref({
  username: '',
  password: '',
})

const rememberMe = ref(false)

const login = async () => {
  
  const res =await $api(`https://booking-back-sand.vercel.app/auth/login`,{
    method:'post',
    body:{
      username:credentials.value.username,
      password:credentials.value.password
    }})
 

    console.log(res)
        Messageres.value = 'login successfully'
        alerDialogSuccess.value = true
        useCookie('userData').value = res.data.user
        useCookie('accessToken').value = res.data.token
        nextTick(() => {
          router.replace(route.query.to ? String(route.query.to) : '/calender')
        })

}
 


const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}
const { locale } = useI18n({ useScope: 'global' })
const changeLanguage = (lang) => {
  window.location.reload();
  locale.value = lang.i18nLang;
}
</script>
<template>
  <div class="error-login">
    <VAlert density="default" color="success" variant="tonal" v-if="alerDialogSuccess">
      {{ Messageres }}
    </VAlert>

    <VAlert density="default" color="error" variant="tonal" v-if="alerDialogFault">
      {{ Messageres }}
    </VAlert>
  </div>
  <div class="auth-logo d-flex align-center gap-x-3">
    <h1 class="auth-title">
      {{ themeConfig.app.title }}
    </h1>
  </div>
  <div class="login-header">
    <ThemeSwitcher :themes="themes" />
    <IconBtn>
      <VIcon size="24" icon="tabler-language" />

      <!-- Menu -->
      <VMenu activator="parent" offset="12px">
        <!-- List -->
        <VList :selected="[locale]" color="primary" min-width="175px">
          <!-- List item -->
          <VListItem v-for="lang in themeConfig.app.i18n.langConfig" :key="lang.i18nLang" :value="lang.i18nLang"
            @click="changeLanguage(lang)">
            <!-- Language label -->
            <VListItemTitle>{{ lang.label }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </IconBtn>
  </div>

  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <div class="d-flex align-center justify-center w-100 h-100" style="padding-inline: 6.25rem;">
          <VImg max-width="613" :src="authThemeImg" class="auth-illustration mt-16 mb-2" />
        </div>
        <img class="auth-footer-mask" :src="authThemeMask" alt="auth-footer-mask" height="280" width="100">
      </div>
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">
            {{ $t('Welcome to') }} <span class="text-capitalize">Heros Station</span>! 👋🏻
          </h4>
          <p class="mb-0">
            {{ $t('Please sign-in to your account') }}
          </p>
        </VCardText>
     
        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <VCol cols="12">
                <AppTextField v-model="credentials.username" :label="$t('UserName')" :placeholder="$t('UserName')"
                  type="username" autofocus :rules="[requiredValidator]" :error-messages="errors.username" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField v-model="credentials.password" :label="$t('Password')" :placeholder="$t('Password')"
                   :rules="[requiredValidator, minLengthValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />

                <div class="d-flex align-center flex-wrap justify-space-between my-6">
                  <VCheckbox v-model="rememberMe" :label="$t('Remember me')" />
                  <!-- <RouterLink class="text-primary ms-2 mb-1" :to="{ name: 'forgot-password' }">
                    {{ $t('Forgot Password ?') }}
                  </RouterLink> -->
                </div>
                <VBtn block type="submit">
                  {{ $t('Login') }}
                </VBtn>
              </VCol>
        
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>


<template>
    <v-dialog v-model="dialog" class="auth-modal" width="800">
        <v-card>
            <v-card-title>
               <v-row>
                    <v-col>
                        <VBtn icon="mdi-close" variant="text" @click="dialog = false" rounded />
                    </v-col>
                    <v-col>
                        <VIcon icon="mdi-twitter" color="blue" />
                    </v-col>
               </v-row>
            </v-card-title>

            <v-card-item>
                <v-container class="auth-modal__container" fluid>
                    <h1 class="text-h4 auth-modal__title">Создайте учетную запись</h1>
                
                
                    <VBtn class="auth-modal__socialBtn" prepend-icon="mdi-google" variant="outlined" rounded block>Войдите через Google</VBtn>
                
                
                    <VBtn class="auth-modal__socialBtn" prepend-icon="mdi-apple" variant="outlined" rounded block>Войдите через Apple</VBtn>
        
                    <v-row class="auth-modal__divider" justify="center" align="center" no-gutters>
                        <v-col>
                            <v-divider></v-divider>
                        </v-col>
                        <span>
                            or
                        </span>
                        <v-col>
                            <v-divider></v-divider>
                        </v-col>
                    </v-row>
                
                
                    <v-form class="auth-modal__form" validate-on="input">
                        <v-text-field class="auth-modal__input"  type="email" label="Почта" color="blue" autofocus />
                       
                        <v-text-field class="auth-modal__input" type="password" label="Пароль" color="blue" aria-autocomplete="new-password" />
                        <v-text-field class="auth-modal__input" type="password" label="Потверждение пароля" color="blue" aria-autocomplete="new-password-confirm" />
                      
                        <VBtn variant="flat" size="large" color="blue" type="submit" rounded block>Зарегестрироваться</VBtn>
                    </v-form>
    
                </v-container>
            </v-card-item>
            <v-card-actions>
                
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
interface IProps {
    modelValue: boolean;
}

const props = defineProps<IProps>();
const dialog = useVModel(props, 'modelValue');
</script>

<style lang="scss" scoped>
.auth-modal {
    border-radius: psc(16);
}
.auth-modal__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: psc(364);
    padding: psc(0) psc(32);
    margin: 0 auto;
    width: 100%;
    gap: psc(12) 0;
}

.auth-modal__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.auth-modal__input {
    width: 100%;
}

.auth-modal__divider {
    width: 100%;
    span {
        margin: 0 psc(10)
    }
}

.auth-modal__title {
    margin-bottom: psc(30);
    font-weight: bold;
    text-align: center;
}
</style>
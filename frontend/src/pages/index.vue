<template>
    <div class="wrapper">
        <div class="blueSide">
            <VIcon class="blueSideBigIcon" icon="mdi-twitter" />
            <ul class="blueSideListInfo">
                <li class="text-h6 blueSideListInfoItem">
                    <VIcon color="white" class="blueSideListInfoIcon" icon="mdi-magnify" />
                    Читайте о том, что вам <br /> интересною
                </li>
                <li class="text-h6 blueSideListInfoItem">
                    <VIcon color="white" class="blueSideListInfoIcon" icon="mdi-account-multiple-outline" />
                    Узнайте, о чем говорят в мирею
                </li>
                <li class="text-h6 blueSideListInfoItem">
                    <VIcon color="white" class="blueSideListInfoIcon" icon="mdi-message-outline" />
                    Присоединяйтесь к общению.
                </li>
            </ul>
        </div>
        
        <div class="loginSide">
           <div class="loginSideWrapper">
                <VIcon color="blue" class="loginSizeTwitterIcon" icon="mdi-twitter" />
                <h1 class="text-h4 loginSideTitle">Узнайте, что происходит в мире прямо сейчас</h1>
                <div class="text-subtitle-1 loginSideSubtitle">Присоеденяйтесь к Твиттеру прямо сейчас</div>
                <div class="loginSideBtns">
                    <VBtn variant="flat" size="large" color="blue" rounded block @click="onSignupClick">Зарегистрироваться</VBtn>
                    <VBtn variant="outlined" size="large" color="blue" rounded block @click="onSignInClick">Войти</VBtn>
                </div>
           </div>
        </div>
        
        <TheLoginModal v-model="isSigninOpen" />
        <TheSignupModal v-model="isSignupOpen" />
    </div>
</template>

<script lang="ts" setup>
const isSigninOpen = ref<boolean>(false);
const isSignupOpen = ref<boolean>(false);

function onSignInClick() {
    isSigninOpen.value = true;
}

function onSignupClick() {
    isSignupOpen.value = true;
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh;
    height: 100%;
}
.blueSide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    background-color: #71c9f8;
}
.blueSideListInfo {
    display: grid;
    color: white;
    font-weight: bold;
    gap: psc(40) 0;
    font-size: psc(20);
    font-weight: bold;
    z-index: 1;
}

.blueSideListInfoIcon {
    font-size: psc(24);
    margin-right: psc(10);
}

.blueSideListInfoItem {
    display: flex;
    align-items: flex-start;
    font-weight: bold;
}

.blueSideBigIcon[class] {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 200vw;
    z-index: 0;
    color: $primary;
}

.loginSide {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.loginSizeTwitterIcon {
    font-size: psc(45);
    color: $primary;
    margin-bottom: psc(20);
}

.loginSideWrapper {
    width: psc(380);
}

.loginSideTitle{
    font-weight: bold;
    font-size: psc(32);
    margin-bottom: psc(45);
}

.loginSideSubtitle {
    font-weight: bold;
    margin-bottom: psc(10);
}
.loginSideBtns {
    display: grid;
    gap: psc(20);
    &:deep(.v-btn__content) {
        text-transform: none;
        font-weight: bold;
    }
}
</style>
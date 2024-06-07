<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <p id="eng_sloka" style="background-color: white;padding:10px;">
        <span style="font-weight: 600;margin: 0px;background-color: white;">
            Translation:
        </span>
        <p style="background-color: white;">
            {{ eng_sloka }}
        </p>
    </p>
</template>

<style scoped>
    *{
        margin: 0;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    #eng_sloka{
        font-size: 20px;
        margin-top: 40px;
        border-radius: 10px;
        gap: 2px;
        display: flex;
        margin-bottom: 0px;
    }
    span{
        margin-right: 20px;
    }
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Translation',
  props: ['eng_sloka']
}
</script>

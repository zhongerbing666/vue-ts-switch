# vue-ts-switch
优雅的完成异步操作之外的开关状态，可以使用在loading的状态或者遮罩层的状态


#### demo
```
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import loading from 'vue-ts-switch'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  flag = false
  mounted() {
      console.log(this.flag);
      // flag will turn on first and close after 3 seconds
      this.getData()
  }
  @loading('flag')
  getData() {
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve()
          }, 3000)
      })
  }
}
</script>
```

Bài 2: SSR và CSR

- SSR: 
  + SEO: Tốt
  + Tốc độ tải trang lần đầu: Tốt
  + Hiệu năng: Ko tốt
  + Trang tĩnh: Tốt
- CSR: 
  + SEO: Ko Tốt
  + Tốc độ tải trang lần đầu: Tốt
  + Hiệu năng: tốt
  + Trang tĩnh: Tốt

=> Dùng SSR hay CSR tùy thuộc vào dự án
  + Marketing tốt thì dùng SSR
  + Ứng dụng quản lý thì dùng CSR
================================================================
Bài 4: Interpolation

Interpolation trong Vue.js là cách để hiển thị dữ liệu động trong HTML hoặc template của Vue. Nó cho phép bạn nhúng giá trị của các biến, biểu thức, hoặc thuộc tính vào trong giao diện của ứng dụng một cách dễ dàng. Vue.js sử dụng cú pháp double curly braces ({{ }}) để thực hiện điều này.
<!-- <template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue.js!",
    };
  },
};
</script> -->
=======
Bài 5: Bind attribute

Thuộc tính của thẻ html dùng v-bind (:src, :for :href,...)

<!-- <template>
  <div>
    <p>{{ message }}</p>
    <img :src="variable"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue.js!",
      variable: 'https://img.png'
    };
  },
};
</script> -->
======
Bài 6: Methods

<!-- <template>
  <div>
    <p>{{ message }}</p>
    <button @click="logout">{{ message }}</button>
    <b>Render: {{randomText()}}</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue.js!",
      variable: 'https://img.png'
    };
  },
  method() {
    logout() {
      console.log(1);
    },
    randomText() {
      return "Hello, Vue.js";
    }
  }
};
</script> -->
=====
Bài 7: Raw html

Dùng v-html trong thẻ html để render
=====
Bài 8&9&10: Event

- @submit.prevent='submit'
- Sự kiện: @click, @change,... Nếu ko có tham số truyền vào hàm thì khi gọi để như sau: @click="handleLog", handleShow,...
- Có mặc định 1 biến event khi gọi hàm có thể log ra biến (event.targer) hoặc là $event truyền vào trong hàm handleA(10, $event)
- Nhấn enter để submit form: <input type="text" @keyup.enter='handleLogin' />
- Viết tắt sự kiện: v-on:click -> @click
- Tham số default: $event
- v-once: Hiển thị 1 lần duy nhất
- Ko nên viết @click="count++", nên viết logic trong hàm
=====
Bài 11: Two way bindings (Vuejs & Angular còn React ko có)

- One way bindings: ví dụ hiển thị data lên template
- js to template & template to js
- Ví dụ khi code thường
<!-- <template>
  <div>
    <input type="text" @input='handleInput'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue.js!"
    };
  },
  method() {
    handleInput(e) {
      this.message = e.target.value;
    }
  }
}; -->
- Có thể dùng v-model của vue cho nhanh
- 

====
Bài 12: Computed

<!-- <template>
  <div>
    <b>Hello, {{ getFullName }}</b>
    <p>{{count}}</p>
    <button @click='count++' type="button">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      firstName: 'John',
      lastName: 'Foo',
    };
  },
  method() {
    getFullName() {
      return firstName + ' ' + lastName;
    }
  }
}; -->
-[Performance yếu] Nhược được khi dùng methods là khi component rerender do data khác(count) thay đổi thì hàm đó luôn chạy lại mặc dù fName và lName ko thay đổi, còn computed sẽ đc cache lại.
- Computed
  + Tính toán dữ liệu, nhưng sẽ ko chạy lại khi data ko thay đổi
  + Sẽ chạy lại khi data phụ thuộc có thay đổi
  + Dùng như tên biến khi gọi trên tempalte
=> Xử lý sự kiện dùng method, còn tính toán dùng computed
=> Search thêm so sánh computed và method
=====
Bài 13: Watch

<!-- <template>
  <div>
    <b>Hello, {{ getFullName }}</b>
    <p>{{count}}</p>
    <button @click='count++' type="button">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      firstName: 'John',
      lastName: 'Foo',
    };
  },
  watch: {
    count(newValue, oldValue) {
      if(newValue===10) {
         alert('Won'); 
         this.count = 0;
      }
    }
  }
}; -->
- Theo dõi 1 data nào đó trong vuejs
- Đặt tên như tên biến trong data
- Ví dụ; Theo dõi count, nếu như lơn hơn 10 thì do something,...
=====
Bài 14: So sánh method, computed, watch

- method: Xử lý sự kiện, tính năng, 
- computed: dùng tính toán nhiều data và cho ra 1 kết quả để hiển thị lên template
- watch: dùng theo  dõi 1 data
=====
Bài 15 & 16: Styling css

<!-- <p :style={color: 'red', backgroudColor: 'yellow'}></p> -->
<!-- <p :style=groupStyle></p> Nếu nhiều biến thì dùng :style="[var1, var2,...]" Recommended sử dụng -->
<!-- data() {
  groupStyle: {
    color: 'red',
    fontSize: '20px'
  }
} -->
- Từ khóa Style và Class binding
- Trong 1 thẻ html chứa class='btn' :class='{"className": true/false}'
=====
Bài 17: Conditional rendering v-if v-else

- Dùng v-if, v-else
=====
Bài 18: Conditional rendering v-else-if
=====
Bài 19: Giới thiệu v-show

- v-show:false => vẫn đc render ra nhưng thêm display:none
- v-if: false => Ko đc render
=====
Bài 20: List rendering

- Dùng v-for
=====
Bài 21&22&23&24&25&26&27: Pokemon còn bài 27

- Proxy có trong ES7
===================XongCheapter1=============================================================

===================Cheapter2================================================
Bài 1: Component

- Chia nhỏ 1 project lớn thành các ứng dụng nhỏ
- Khả năng tái sử dụng và bảo trì code
- Khả năng phát triển dự án tốt
- Dễ dàng làm việc với Team.

=====
Bài 2: Khởi tạo project

- Tên projet:Ko viết hoa, ví dụ: ten-du-an
=====
Bài 3: Cấu trúc thư mục

- asset: chứa ảnh, file css,...
- compoennt: chứa component dùng chung
- pakage.json: chứa thông tin project, lệnh script
- pakage-lock.json: lưu lại lịch sử chạy package.json
- Khác nhau DevDependence và Dependence
  + Khi ở dev các thư viện có trong 2 cái dev dependency và dependency đều tồn tại trong node module
  + Khi lên Prod thì dev dependency ko tồn tại trong node module nữa.
=====
Bài 4: Tạo và cách dùng component

- Đặt tên: FirstComponent.vue, TheHeader.vue
=====
Bài 5: Vetur extensions
=====
Bài 6&7&8: Props

- Truyền dữ liệu từ cpn cha xuống cpn con.
- Dữ liệu này lấy ra để show thôi chứ ko thay đổi data này
- Truyền 1 object chứa nhiều data nhất có thể(product có 100 thuộc tính? truyền từng cái là ko đc)
- Cơ chế chạy: template -> script
- type: [String, Object,...],
- propA: {type, default, required, validator(value){}}
=====
Bài 9: Custom event

<!-- <ProductItem @myEvent='doSomething' /> -->
<!-- In ProductItem component: this.$emit('myEvent') -->
=====
Bài 10: Provide inject

- provide ở cpn cha.
- inject ở cpn con.
=====
Bài 11: Component register

- Local component: Đăng ký trong component khác để sử dụng
- Global component: Đăng ký để sử dụng chung ở main.js

=====
Bài 12: Slot

- Truyền html vào component con, ví dụ: Layout,...
=====
Bài 13: Dynamic component

- Render  component theo điều kiện: <component :is=LoaiPhim></component> thay vì dùng v-if để check hiện.
- Giữ lại state bằng KeepAlive khi chuyển qua giữa các component
=====
Bài 14: Teleport(Vue3)

- Dịch chuyển từ A tới B(Ví dụ ModalPopup)
=====
Bài 15: Tạo Project
=====
Bài 16: Analytis and naming component

- TheHeader, TheSidebar,... cách đặt tên
- 
=====
Bài 19: Xong

- 
======
Bài 20&21: Modal UI

- Logic: State show/hide sẽ để ở component cha(nơi mà gọi component modal), trong component cha định nghĩa 2 hàm:
  + Hàm openModal: khi click sẽ thay đổi state isOpen-> true.
  + Hàm closeModal: khi click sẽ thay đổi state isOpen-> false.
  + Truyền state này cho component Modal.(isOpen)
  + Đối với nút CLOSE thì sẽ this.$emit('closeFn') lên để thay đổi state cha(isOpen->false)
======
Bài 22 -> hết: Danh sách sản phẩm giỏ hàng

- Dữ liệu CartList sẽ được lưu trong App.vue để dễ phân phối xuống.
- Teleport chuyển qua body nhiều cũng đc, Gọi component modal vào component cần gọi, và state isOpen sẽ để ở component đã gọi modal đó
- LeetCode luyện code giải thuật 
===================Cheapter3================================================
Bài 1: VueX
=====
Bài 2: Setup form

- Tạo component form
=====
Bài 3: InputText dùng v-model
Bài 4: Textarea dùng v-model
Bài 5: Checkbox dùng v-model (1 ô check là true/false, còn nhìu sẽ  là array và phải có value )
Bài 6: Radiobutton dùng v-model (phải có value)
Bài 7: Selectbox dùng v-model (phải có value)
Bài 8: Modifers v-model.lazy, .number,...
- Lazy(ngừng gõ thì mới cập nhật data, nghĩa là dùng sự kiện @change thay vì @input), Number, Trim

=====
Bài 9: Layout manager
=====
Bài 11: VueX - continue

- Quản lý dữ liệu tập trung 1 chỗ, ko nên quản lý mỗi nơi mỗi chỗ
- 
=====
Bài 13,14,15: Thực hành State (Data trong vuex lưu tập trung)

- khai báo trong state
const store = createStore({
  state() {
    return {
      counter: 0,
      users: [
        {
          id: 1,
          name: 'Alice',
          age: 25
        }, 
        {
          id: 2,
          name: 'Bob',
          age: 30
        }
      ]
    };
  }
});
- component tương tác  với vuex như thế nào
- lấy data từ store
computed: {
    userList() {
      return this.$store.state.users;
    }
  }
- Từ khóa: state vuex
- mapState trả về 1 object nên là có the viết lại computed: {...mapState, }
=====
Bài 16,17,18: Getter trong vuex

- Lấy state về mà có thay đổi gì đó trong mảng gọi là Getter, Còn ko thay đổi gì gọi là state
- ...mapGetter({
  name: valueName
})
=====
Bài 19: Mutations

- Dùng cập nhật state
=====
Bài 20, 21: Actions

- Thực hiện  các tác vụ bất đồng bộ như call API,...
- Lí do ko dùng tác vụ bất đồng bộ trong mutations, Theo docs của vuex thì mutations phải đồng  bộ.
- Dùng ...mapActions({})
=====
Bài 22,23,24,25: Chức năng add user
- xử form
- click submit -> dispatch action lên store
- action -> mitation update state
- lấy state từ store để show list mới
======
Bài 32: namespacedmodule trong vuex
- state, getter, mutation, action
======
Bài 33: 
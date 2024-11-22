class DynamicArray {
    arr;
    count;
    size;
    constructor() {
      this.arr = new Array(1); // Изначальный массив с размером 1
      this.count = 0; // Текущее количество элементов
      this.size = 1; // Размер массива
    }

    add(data){
        if(this.count === this.size){
            this.growSize();
        }
        this.arr[this.count] = data;
        this.count++;
        return this.arr;
    }
    
    remove(){
        this.arr[this.count-1] = null;
        this.count--;
        return this.arr;
    }
    
    growSize(){
        this.size = Math.ceil(this.size * 1.5);
        let new_arr = new Array(this.size);
        for(let i = 0; i < this.count; i++){
            new_arr[i] = this.arr[i];
        }
        return this.arr = new_arr;
    }
}

let new_arr = new DynamicArray();
console.log(new_arr.add(5));
console.log(new_arr.add(2));
console.log(new_arr.add(8));
console.log(new_arr.remove());
console.log(new_arr.remove());
console.log(new_arr.add(10));
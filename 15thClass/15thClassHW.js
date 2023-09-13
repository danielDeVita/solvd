class CustomHashTable {
    constructor() {
        this.storage = [];
    }

    print() {
        return this.storage
    }

    //simple hashing that uses UTF-16 code for each letter
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            //sum them all together
            hash += key.charCodeAt(i);
        }
        return hash
    }

    insert(key, value) {
        //we get the index from the key passing through the hash FN
        let index = this.hash(key);
        //if it is undefined, we set it to be key:value directly (bucket was empty)
        if (this.storage[index] === undefined) this.storage[index] = [[key, value]];
        //if it's not undefined it means bucket already has data
        else {
            //iterate through each key:value pair in bucket
            for (let i = 0; i < this.storage[index].length; i++) {
                //check if key exists, if it does we update it with the new value (duplicated data)
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                }
            }
        }
    }

    get(key) {
        //get index
        let index = this.hash(key);
        //if that index is undefined it means hash table doesn't havethat key
        if (this.storage[index] === undefined) return "Key not existing in Hash Table";
        //iteration over that bucket
        for (let i = 0; i < this.storage[index].length; i++) {
            //when found we return it
            if (this.storage[index][i][0] === key) return this.storage[index][i][1];
        }
    }

    delete(key) {
        //we get index from hash FN
        let index = this.hash(key);
        //if it doesn't exist, we can't remove it
        if (!this.storage[index]) return
        //iterate through indexes
        for (let i = 0; i < this.storage[index].length; i++) {
            //when the value from index coincides with key, we delete it
            if (this.storage[index][i][0] === key) {
                this.storage[index].splice(i, 1);
                return
            }
        }
    }
}

const customHashTable = new CustomHashTable();

console.log(customHashTable.hash("key1")); //378

customHashTable.insert("key1", "value1");
customHashTable.insert("key2", "value2");
console.table(customHashTable.print())

console.log(customHashTable.get("key1")); //value1
console.log(customHashTable.get("FA478")); //Key not existing in Hash Table

customHashTable.insert("key2", "otherValue");
console.table(customHashTable.print()) 
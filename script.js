class HashMap {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    // Hash function to map the key to a specific bucket index
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    // Insert or update a key-value pair in the hash map
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Check if key already exists and update the value
        for (let i = 0; i < bucket.length; i++) {
            const [storedKey, storedValue] = bucket[i];
            if (storedKey === key) {
                bucket[i] = [key, value];  // Update value
                return;
            }
        }

        // If key doesn't exist, add it as a new entry
        bucket.push([key, value]);
    }

    // Retrieve the value associated with a key
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            const [storedKey, storedValue] = bucket[i];
            if (storedKey === key) {
                return storedValue;
            }
        }

        return undefined;  // Return undefined if key is not found
    }

    // Delete a key-value pair from the hash map
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            const [storedKey] = bucket[i];
            if (storedKey === key) {
                bucket.splice(i, 1);  // Remove key-value pair
                return true;  // Return true on successful deletion
            }
        }

        return false;  // Return false if key is not found
    }
}

// Example usage:
const map = new HashMap(10);

map.set('apple', 100);
map.set('banana', 150);
map.set('orange', 200);

console.log(map.get('apple'));  // Output: 100
console.log(map.get('banana'));  // Output: 150

map.set('apple', 300);  // Update value for 'apple'
console.log(map.get('apple'));  // Output: 300

map.delete('banana');  // Delete key 'banana'
console.log(map.get('banana'));  // Output: undefined

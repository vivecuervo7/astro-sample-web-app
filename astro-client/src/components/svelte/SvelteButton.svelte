<script>
import { count, increment } from '../../stores/counter.ts'
</script>

<div>
    <h2>Svelte</h2>
    <p>{$count}</p>
    <button on:click={increment}>
        Increment count
    </button>
</div>

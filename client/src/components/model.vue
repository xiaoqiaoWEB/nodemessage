<template>
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{title}}</h5>
                    <button type="button" class="close">
                        <span>&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <slot></slot>
                </div>

                <div class="modal-footer">
                    <slot name="foot"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "model",
        props:['title']
    }
</script>

<style scoped>

</style>

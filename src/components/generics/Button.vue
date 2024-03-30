<template>
    <button :disabled="disabled">
        <slot />
    </button>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Button'
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    $accent: #9747FF;

    button {
        display: inline-flex;
        align-items: center;
        height: 40px;
        width: max-content;
        padding: 0 $sp-20;
        border: 1px solid $quaternary;
        background: #ECF0F4;
        outline: none;
        transition-duration: .2s;
        border-radius: 4px;
        color: $primary;
        cursor: pointer;
        user-select: none;
        font-weight: 500;

        &.primary {
            background: $accent;
            color: $white;
            border: 0;

            &:hover {
                background: darken($accent, 10%);
            }

            &[disabled] {
                background: #c090ff;
            }
        }

        &.secondary {
            // this is the default appearance, no need to define in the class
        }

        &.tertiary {
            background: none;
            background: #A1BAD0;
            color: $primary;
            border: 0;

            &:hover {
                background: lighten(#A1BAD0, 5%);
            }

            &[disabled] {
                background: lighten(#A1BAD0, 10%);
                color: #B4B9BB;
            }
        }

        &.transparent {
            background: none;
            border: none;
            color: $white;

            &:hover {
                background: darken(#A1BAD0, 5%);
            }
        }
    }
</style>

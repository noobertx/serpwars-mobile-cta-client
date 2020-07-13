<template>
	<div class="input-group color-picker serp-color-picker" ref="colorpicker">
	<input type="text" class="form-control" v-model="$store.state.loaded_data[$store.state.current_item].style[item][field]" @focus="showPicker()" @input="updateFromInput" />
	<span class="input-group-addon color-picker-container">
		<span class="current-color" :style="'background-color: ' + $store.state.loaded_data[$store.state.current_item].style[item][field]" @click="togglePicker()"></span>
			<chrome-picker :value="$store.state.loaded_data[$store.state.current_item].style[item][field]" @input="updateFromPicker" v-if="displayPicker" />
		</span>
	</div>
</template>
<script>
	import { Chrome } from 'vue-color'
	export default{
		name:"SimpleColorPicker",
		props: ['color','item','field'],
		data() {
			return {
				colors: {
					hex: '#000000',
				},
				colorValue: '',
				displayPicker: false,
			}
		},
		mounted() {
			var context = this;
			var color = context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field];
        	// return 
			this.setColor(color || '#000000');
		},
		methods: {
		setColor(color) {
			this.updateColors(color);
			this.colorValue = color;
		},
		updateColors(color) {
			var context = this;
			if(color.slice(0, 1) == '#') {
				this.colors = {
					hex: color
				};

			}
			else if(color.slice(0, 4) == 'rgba') {
				var rgba = color.replace(/^rgba?\(|\s+|\)$/g,'').split(','),
					hex = '#' + ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1);
				this.colors = {
					hex: hex,
					a: rgba[3],
				}
			}
			context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field] = this.colors.hex;
			
		},
		showPicker() {
			document.addEventListener('click', this.documentClick);
			this.displayPicker = true;
		},
		hidePicker() {
			document.removeEventListener('click', this.documentClick);
			this.displayPicker = false;
		},
		togglePicker() {
			this.displayPicker ? this.hidePicker() : this.showPicker();
		},
		updateFromInput() {
			this.updateColors(this.colorValue);
		},
		updateFromPicker(color) {
			this.colors = color;
			if(color.rgba.a == 1) {
				this.colorValue = color.hex;
			}
			else {
				this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
			}
		},
		documentClick(e) {
			var el = this.$refs.colorpicker,
				target = e.target;
			if(el !== target && !el.contains(target)) {
				this.hidePicker()
			}
		}
	},
		watch: {
			colorValue(val) {
				if(val) {
					this.updateColors(val);
					this.$emit('input', val);
					//document.body.style.background = val;
				}
			}
		},
		components: {
			'chrome-picker': Chrome,
		},
	}
</script>
<style>
.serp-color-picker{
	position:relative;
}
.serp-color-picker input.form-control {
    padding-left: 35px!important;
    border: none!important;
    /*height: 1.25em!important;*/
    padding-top: 6px;
    padding-bottom: 6px;
    color: #555;
    font-size: 14px;
    border-radius:5px;
}
span.input-group-addon.color-picker-container {
    position: absolute;
    border: 1px solid #ddd;
    border-top:none;
    border-bottom:none;
    border-left:none;
}
.serp-color-picker span.current-color {
    /*position: absolute;*/
    top: 0;
    height: 35px!important;
    width: 32px!important;
    /*border-radius: 200px!important;*/
    cursor: pointer;
    display: block;
}

.input-group.serp-color-picker {
    position: relative;
    border: 1px solid #ddd;
    width: 75%;
}

.serp-color-picker input.form-control:focus {
    border:none!important;
    box-shadow: none!important;
}

.vc-chrome {
	position: absolute;
    top: 50px;
    left: 0;
    z-index: 9;
}

</style>
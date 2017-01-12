export interface Image {
	title: string;
	url: string;
	index: number;
	@HostBinding('class.active')
	@Input() public active:boolean;
}

<script lang="ts">
	import {
		Avatar,
		Alert,
		H6,
		Badge,
		Button,
		Fab,
		IconButton,
		ToggleButtonGroup,
		Card,
		CardHeader,
		CardMedia,
		Body2,
		CardContent,
		CardAction,
		Spacer,
		Subtitle2,
		H5,
		Switch,
		Radio,
		Body1
	} from '@lib';
	import Icon from '@lib/components/icon/Icon.svelte';
	import ToggleButton from '@lib/components/toggle-button/ToggleButton.svelte';
	import {
		mdiBell,
		mdiBroom,
		mdiCalendar,
		mdiCheckCircle,
		mdiDotsVertical,
		mdiFolder,
		mdiFormatAlignJustify,
		mdiFormatBold,
		mdiFormatItalic,
		mdiFormatUnderline,
		mdiHeart,
		mdiOpacity,
		mdiRun,
		mdiShareVariant,
		mdiSpeaker,
		mdiStar,
		mdiTrashCanOutline
	} from '@mdi/js';

	let toggleActive = false;
	let activeToggle = ['2'];
	let multipleActiveToggle = ['2', '3'];

	const multipleGroupChange = (e: CustomEvent) => {
		multipleActiveToggle = e.detail;
	};

	const groupChange = (e: CustomEvent) => {
		activeToggle = e.detail;
	};

	const toggleChange = () => {
		toggleActive = !toggleActive;
	};

	const selectionChange = (e: CustomEvent) => {
		toggleActive = !toggleActive;
	};
</script>

<div>
	<!-- <div>------------------------------------------------------------------------------</div>
	<H6>Checkbox</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-start">
		<Checkbox color="var(--error)" value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Checkbox</Body1>
		</Checkbox>
		<Checkbox color="var(--primary)" value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Checkbox</Body1>
		</Checkbox>
		<Checkbox value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Checkbox</Body1>
		</Checkbox>
		<Checkbox disabled value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Checkbox</Body1>
		</Checkbox>
		<Checkbox disabled value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Checkbox</Body1>
		</Checkbox>
		<Checkbox color="var(--success)" value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Checkbox</Body1>
		</Checkbox>
	</div> -->
	<div class="mb-6" />
	<div>------------------------------------------------------------------------------</div>
	<H6>Radio</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-start">
		<Radio value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Radio</Body1>
		</Radio>
	</div>
	<div class="mb-6" />
	<div>------------------------------------------------------------------------------</div>
	<H6>Switch</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-start">
		<Switch value={toggleActive} on:change={selectionChange}>
			<Body1 slot="label">Switch</Body1>
		</Switch>
	</div>
	<div class="mb-6" />

	<div>------------------------------------------------------------------------------</div>
	<H6>Card</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-start">
		<Card style="width: 275px;">
			<CardContent>
				<Subtitle2 secondary style="margin-bottom: 4px;">Word of the day</Subtitle2>
				<H5>
					be<span>•</span>nev<span>•</span>o<span>•</span>lent
				</H5>
				<Subtitle2 secondary style="margin-bottom: 4px;">adjective</Subtitle2>
				<Body2>
					well meaning and kindly.
					<br />
					"a benevolent smile"
				</Body2>
			</CardContent>
			<CardAction>
				<Button text color="var(--primary)">Learn More</Button>
			</CardAction>
		</Card>
		<Card style="width: 275px;">
			<CardMedia src="https://akaspanion.github.io/ui-neumorphism/images/beaches-2.jpg">
				<H6 dark slot="title">Top 10 Indian beaches</H6>
			</CardMedia>
			<CardContent>
				<Subtitle2 secondary style="margin-bottom: 4px;">Number 1</Subtitle2>
				<Body2>
					Radhanagar Beach <br />
					Havock Island, Andaman
				</Body2>
			</CardContent>
			<CardAction>
				<Button text color="var(--primary)">Share</Button>
				<Button text color="var(--primary)">Explore</Button>
			</CardAction>
		</Card>
		<Card style="width: 305px;">
			<CardHeader>
				<H6 slot="title">Lorem ipsum</H6>
				<Subtitle2 slot="subtitle" secondary>Lorem ipsum dolor sit amet</Subtitle2>
				<IconButton slot="action">
					<Icon path={mdiDotsVertical} size={1}></Icon>
				</IconButton>
			</CardHeader>
			<CardMedia src="https://akaspanion.github.io/ui-neumorphism/images/beaches-2.jpg" />
			<CardContent>
				<Body2>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque architecto
					reprehenderit magnam esse est id ipsum ut delectus. Consequuntur suscipit hic
					eum ea adipisci, illum sed iure saepe aperiam quia!
				</Body2>
			</CardContent>
			<CardAction>
				<Button text color="var(--primary)">Read</Button>
				<Button text color="var(--primary)">Bookmark</Button>
				<Spacer />
				<IconButton>
					<Icon path={mdiHeart} size={1}></Icon>
				</IconButton>
				<IconButton>
					<Icon path={mdiShareVariant} size={1}></Icon>
				</IconButton>
			</CardAction>
		</Card>
	</div>
	<div class="mb-6" />
	<div>------------------------------------------------------------------------------</div>
	<H6>ToggleButtonGroup</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-center">
		<div class="flex flex-col items-center">
			<ToggleButtonGroup value={activeToggle} on:change={groupChange}>
				<ToggleButton value="1" color="var(--primary)">
					<Icon path={mdiFormatBold} size={0.9} />
				</ToggleButton>
				<ToggleButton value="2">
					<Icon path={mdiFormatItalic} size={0.9} />
				</ToggleButton>
				<ToggleButton value="3">
					<Icon path={mdiFormatUnderline} size={0.9} />
				</ToggleButton>
			</ToggleButtonGroup>

			<div class="flex flex-col items-center p-3">
				<div>active</div>
				<div>[{activeToggle}]</div>
			</div>
		</div>
		<div class="flex flex-col items-center">
			<ToggleButtonGroup
				multiple
				value={multipleActiveToggle}
				color="var(--primary)"
				on:change={multipleGroupChange}
			>
				<ToggleButton value="1">
					<Icon path={mdiFormatBold} size={0.9} />
				</ToggleButton>
				<ToggleButton value="2">
					<Icon path={mdiFormatItalic} size={0.9} />
				</ToggleButton>
				<ToggleButton value="3">
					<Icon path={mdiFormatUnderline} size={0.9} />
				</ToggleButton>
				<ToggleButton disabled value="4">
					<Icon path={mdiFormatAlignJustify} size={0.9} />
				</ToggleButton>
			</ToggleButtonGroup>
			<div class="flex flex-col items-center p-3">
				<div>multiple active</div>
				<div>[{multipleActiveToggle}]</div>
			</div>
		</div>
	</div>
	<div>------------------------------------------------------------------------------</div>
	<H6>ToggleButton</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-center">
		<ToggleButton active={toggleActive} on:click={toggleChange}>
			<Icon path={mdiFormatBold} size={0.9} />
		</ToggleButton>
		<ToggleButton color="var(--primary)" active={toggleActive} on:click={toggleChange}>
			<Icon path={mdiFormatUnderline} size={0.9} />
		</ToggleButton>
		<div>
			active: {toggleActive}
		</div>
	</div>

	<div>------------------------------------------------------------------------------</div>
	<H6>IconButton</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-center">
		<IconButton size="small">
			<Icon path={mdiRun} size={0.8} />
		</IconButton>
		<IconButton rounded text={false} color="var(--error)">
			<Icon path={mdiOpacity} size={1} />
		</IconButton>
		<IconButton disabled>
			<Icon path={mdiTrashCanOutline} size={1} />
		</IconButton>
		<IconButton text={false} size="large" color="var(--warning)">
			<Icon path={mdiStar} size={1} />
		</IconButton>
		<IconButton color="var(--primary)" rounded>
			<Icon path={mdiSpeaker} size={1} />
		</IconButton>
		<IconButton color="var(--success)" outlined>
			<Icon path={mdiBroom} size={1} />
		</IconButton>
	</div>
	<div>------------------------------------------------------------------------------</div>
	<H6>Fab</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-center">
		<Fab>
			<span style="font-size: 30px;margin-bottom: 3px;">&#43;</span>
		</Fab>
		<Fab color="var(--primary)">
			<span style="font-size: 24px;">&#9733;</span>
		</Fab>
		<Fab color="#299ae6">
			&nbsp;<span style="font-size: 24px;">&#9729;</span>&nbsp;Extended&nbsp;
		</Fab>
		<Fab disabled>
			<span style="font-size: 24px;">&#9762;</span>
		</Fab>
		<Fab size="small">S</Fab>
		<Fab size="medium">M</Fab>
		<Fab size="large">L</Fab>
	</div>
	<div class="mb-6" />

	<div>------------------------------------------------------------------------------</div>
	<H6>Button</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-center">
		<Button>default</Button>
		<Button color="var(--primary)">colored</Button>
		<Button color="#ccc" bgColor="var(--primary)">colored</Button>
		<Button disabled>disabled</Button>
		<Button rounded>rounded</Button>
		<Button depressed>depressed</Button>
		<Button outlined>outlined</Button>
		<Button text>text</Button>
		<Button size="small">small</Button>
		<Button size="medium">medium</Button>
		<Button size="large">large</Button>
	</div>
	<div class="mb-6" />
	<div>
		<Button block>block button</Button>
	</div>

	<div class="mb-6" />
	<div>------------------------------------------------------------------------------</div>
	<H6>Badge</H6>
	<div class="mb-6" />
	<div class="flex gap-6 items-center">
		<Badge content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge content={4}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge dot content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge dot content={3}>Alert</Badge>
		<Badge bordered overlap content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge bordered overlap dot content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge bordered overlap content={4}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap left bottom content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap left content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap bottom content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap max={49} content={49}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap max={99} content={200}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap max={999} content={1000}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge left inline content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge inline content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge left square content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge square content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge bgColor="var(--error)" content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge content={2} color="var(--error)" bgColor="var(--white)">
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge
			bordered
			content={4}
			color="var(--error)"
			bgColor="var(--white)"
			borderColor="var(--success)"
		>
			<Icon path={mdiBell} size={1} />
		</Badge>
	</div>

	<div>------------------------------------------------------------------------------</div>
	<H6>Avatar</H6>
	<div class="flex gap-6 items-center">
		<Avatar square bgColor="var(--warning)">
			<Icon path={mdiFolder} size={1} />
		</Avatar>
		<Avatar rounded bgColor="var(--success)">
			<Icon path={mdiCalendar} size={1} />
		</Avatar>
		<Avatar src="broken.jpg" alt="Ankit Kumar Pandit">AK</Avatar>
		<Avatar src="broken.jpg" alt="Ankit Kumar Pandit" />
		<Avatar
			alt="Ankit Kumar Pandit"
			src="https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6"
		/>
		<Avatar src="broken.jpg" /><Avatar
			size="small"
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
		<Avatar
			size="medium"
			alt="Ankit Kumar Pandit"
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
		<Avatar
			size="large"
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
		<Avatar
			size={120}
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
	</div>
	<div>------------------------------------------------------------------------------</div>
	<H6>Alert</H6>
	<div class="mb-4" />
	<Alert type="success">I'm a success alert.</Alert>
	<div class="mb-4" />
	<Alert type="success" closable rounded>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
	<div class="mb-4" />
	<Alert type="error" closable>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
	<div class="mb-4" />
	<Alert type="info" closable>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
	<div class="mb-4" />
	<Alert type="warning" closable>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
</div>

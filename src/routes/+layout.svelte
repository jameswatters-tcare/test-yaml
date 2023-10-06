<script lang="ts">
//   import '@skeletonlabs/skeleton/styles/all.css';

  import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	// import '../app.postcss';
</script>



<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h3 class="text-left">Top App Bar...</h3>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
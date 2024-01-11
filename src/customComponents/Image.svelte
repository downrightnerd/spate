<script>
	import { urlFor } from '$lib/utils/image';  
  export let portableText;
</script>

<img width="100%" src={urlFor(portableText.value).url()} alt="" />
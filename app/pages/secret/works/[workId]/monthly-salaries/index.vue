<template>
  <PageLayout>
    <SalaryList :workId="workId" />
  </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from '~/layouts/authenticated/PageLayout.vue';
import SalaryList from '../../components/SalaryList.vue';

const breadCrumbStore = useMyBreadcrumbStore();

const route = useRoute();

const workId = computed(() => route.params.workId as string)

onMounted(() => {

  const isExist = breadCrumbStore.breadCrumb.find(b => b.link === `/secret/works/${workId.value}/monthly-salaries`);

  if (!isExist)
    breadCrumbStore.breadCrumb.push({
      name: 'Monthly Salaries',
      link: `/secret/works/${workId.value}/monthly-salaries`
    })
});

onUnmounted(() => {

  breadCrumbStore.breadCrumb.pop();

});

</script>

<style></style>
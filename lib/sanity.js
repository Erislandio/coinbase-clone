import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: '7yj12mwy',
    dataset: 'production',
    apiVersion: '2022-01-30',
    token: 'skbTfzJFnvxJTo8B6L3OjjtLVvo5dtl9kDtIErRFFoRUsQsPFvH8CVIFT177LAMfOfCAaXFtf6vHvhyakEKKI7shzmMMeqc1OdVlSPjosMqyquftuu7E8Ymo1ThJyM982mmPkTf92YaBhyfnAjBIyWoXBKwISBGKXzl7VZcVLwmQktawsxug',
    useCdn: false
})
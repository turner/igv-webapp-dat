var igvwebConfig = {

    genomes: "resources/genomes.json",
    trackRegistryFile: "resources/tracks/trackRegistry.json",
    sessionRegistryFile: "resources/sessions/sessionRegistry.json",

    // Supply a drobpox api key to enable the Dropbox file picker in the load menus.  This is optional
    //dropboxAPIKey: "...",

     // Supply a Google client id to enable the Google file picker in the load menus.  This is optional
    //clientId: "...",
    // apiKey: "...",

    // Provide a URL shorterner function or object.   This is optional.  If not supplied
    // sharable URLs will not be shortened .
    urlShortener: {
        provider: "tinyURL"
    },

    enableCircularView: true,

    restoreLastGenome: true,

    igvConfig:
        {
            genome: "hg19",
            locus: "all",
            genomeList: "resources/genomes.json",
            queryParametersSupported: true,
            showChromosomeWidget: true,
            showSVGButton: false,
            tracks: [
                {
                    name: 'GBM Copy Number',
                    url: 'https://www.dropbox.com/s/4jufc6dbedpk3qz/GBMCopyNumber.seg.gz?dl=0'
                },
                {
                    type: 'sampleinfo',
                    url: 'https://www.dropbox.com/s/zn8nkd7bhdlg84x/GBMSampleInfo.txt?dl=0'
                }

            ]
        }

}

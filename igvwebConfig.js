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
            genome: "hg38",
            locus: "chr20:56,411,666-56,428,625",
            tracks: [
                {
                    "type": "shoebox",
                    "url": "https://www.dropbox.com/s/qxpnqfvbiqs0eyz/model1.allChr.f.2.hg38.r10.hic?dl=0",
                    "name": "model1.allChr.f.2.hg38.r10.hic",
                    "colorScale": "9010,0,0,255",
                },
                {
                    "type": "sampleinfo",
                    "url": "https://www.dropbox.com/s/t0vj2i9bccwle3x/shoebox_sampleInfo.txt?dl=0"

                }
            ]
        }

}

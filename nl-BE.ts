export default {
  language: {
    name: 'Nederlands (BE)'
  },
  main_fragment: {
    dashboard: 'Overzicht',
    basic: 'Basisinformatie',
    settings: 'Instellingen'
  },
  dashboard: {
    root_impl: 'Root implementatie',
    zygote_monitor: 'Zygote Monitor',
    modules: 'Geen modules | Module (1) × Modules ({0})',
    root_impl_normal: 'Huidige Root Implementatie is {impl}, zwarte lijst zal correct werken.',
    root_impl_abnormal: 'Kon Root Implementatie niet bepalen, zwarte lijst werkt niet.',
    root_impl_multiple: 'Meerdere Root Implementaties gevonden, zwarte lijst zal niet werken.',
    kernelsu_denylist: 'Zwarte lijst van KernelSU verwijst naar apps die zijn gemarkeerd als \'Unmount modules\' in App profiel.',
    magisk_denylist: 'Zwarte lijst van Magisk verwijst naar de ingebouwde zwarte lijst van Magisk.',
    apatch_denylist: 'Zwarte lijst van APatch verwijst naar SuperUser App wiens \'Exclude\' is in- en root is uitgeschakeld'
  },
  settings: {
    log_to_kernel: 'Log naar dmesg (Alleen voor ontwikkelaars)',
    nonroot_as_denylist: 'Behandel niet-root apps als zwarte lijst',
    enforce_denylist: 'Beleid zwarte lijst',
    enforce_denylist_desc: 'Geforceerd: Blokkeer code-injectie en draai mount aanpassingen voor apps in zwarte lijst terug.<br/>Unmount Only: Draai mount aanpassingen terug, maar laat code-injectie toe voor apps in zwarte lijst.',
    enforce_denylist_alert: 'Voor normale gebruikers wordt het sterk aangeraden om de kernel umount functie in de KernelSU beheerder handmatig uit te schakelen om te voorkomen dat mount points meerdere keren geunmount worden als gevolg van verkeerde configuratie.',
    denylist_disabled: 'Uitgeschakeld',
    denylist_enforced: 'Afgedwongen',
    denylist_just_umount: 'Alleen unmounten',
    anonymous_memory: 'Gebruik anoniem geheugen',
    anonymous_memory_desc: 'Laad modules in anoniem geheugen. Dit bemoeilijkt de leesbaarheid, maar omzeilt bepaalde verouderde detectiemechanismen.',
    zn_linker: 'Gebruik Zygisk Next linker (Experimenteel)',
    zn_linker_desc: 'Gebruik de ingebouwde linker in plaats van de systeemlinker om modules te laden. Dit zal de heimelijkheid verbeteren, maar kan compatibiliteitsproblemen veroorzaken.'
  },
  zygote_inject_state: {
    running: 'Wordt uitgevoerd',
    stop_by_user: 'Stop door gebruiker',
    stop_by_crash: 'Stop door zygote gecrasht',
    running_desc: 'Zygote Monitor wordt normaal uitgevoerd.',
    stop_by_user_desc: 'Zygote Monitor gestopt door gebruiker.',
    stop_by_crash_desc: 'Herhaalde herstart van Zygote werd gedetecteerd, Zygote Monitor is automatisch gestopt.'
  },
  zygote_state: {
    unknown: 'Onbekend',
    injected: 'Geïnjecteerd ({pid})',
    inject_failed: 'Injectie mislukt ({pid})',
    skipped: 'Overgeslagen ({pid})',
    unknown_desc: 'De status van deze Zygote is onbekend en kan bestaan maar niet worden gestart, of de Zygote monitor detecteert mogelijk de start niet.',
    injected_desc: 'Zygisk is geïnjecteerd in de Zygote. Het proces-ID is {pid}',
    inject_failed_desc: 'Zygisk werd geprobeerd geïnjecteerd te worden in deze Zygote, maar is mislukt. Het proces-ID is {pid}',
    skipped_desc: 'De Zygote werd gemonitord om te starten. Het proces-ID is {pid}. Maar Zygisk injecteren werd gestopt als gevolg van meerdere eerdere soft reboots van het systeem.'
  },
  corrupted: {
    title: 'Modulebestanden beschadigd',
    desc: 'Draai a. u. b. de wijzigingen terug naar Zygisk Next en probeer opnieuw.'
  }
};
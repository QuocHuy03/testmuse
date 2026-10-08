https://muse.ai/ reg theo quy trình nhé bro ok làm
curl --url ^"https://muse.ai/api/auth/native/send-otp^" ^
  -H ^"accept: */*^" ^
  -H ^"accept-language: en-US,en;q=0.9^" ^
  -H ^"baggage: sentry-environment=production,sentry-release=e1d76cb7a5b8ac96a0e047dead8929c2aced75d6,sentry-public_key=1287bc3f888b18f8dd43e7c289c0adea,sentry-trace_id=739a01817007cea282bfe10297d46eca,sentry-org_id=4509963614355457,sentry-sample_rand=0.7125126021826398,sentry-sample_rate=0.004^" ^
  -H ^"content-type: application/json^" ^
  -b ^"datr=ixXCatXHQp-ueu8ypyjxN10B; dpr=1; hatch_native_auth_csrf=BFFTkOWGQdPEshOzv2JwWLZ_FNmfURByhEVwGYI0bCc.qihyTxkmphCqeG8gt2lz1kEeS_BfZfhFVbDum5jSWwY; hatch_native_auth_temp=v1^%^3AnO86e7KdpadGjfqGsSm0GpirgtjJYMwHKcmvd80GCgvsQ2BnOQJbJflgrZpXBZYmit25yyBp4Eb2P1-Y7d02I5CDqdo46CNvVo64UZMDu0Sgh33yA54CIbR4TfxFPeJqAJFEcIt1Vt6tbFkeXf9Yb9yaPLdsxp9b59dBBMGZQBJ1PXco25he9zYcYNuw8JXb3nDHhKvXcG1UQftm0Mb834swxL7xSM_v3dnjBiCVWS_EaV6UqV8p22pQ9RhKSBzyjW2y1A9o8E2ZI_QPc5RvkQ7g9v_aamr-riMcN4rfxjmfBBNCT9zDyh2x1O0stjF637A0wPm3W7s^%^3ApnEB_Hq5-JnQHxUL^%^3AWvOX60ox87sU47wybJh-nA; hatch_native_auth_device=v1^%^3As9YYxV8y77ajqNjkeL16cwQjlO8sPqpZ4ceQA3hh0V45kf4cQQhoZ8zMaQ^%^3ADewHISDsYjRRAYYx^%^3A1nlop3Bbi_gAnxDSBU5vAg; hatch_native_auth_state=v1^%^3A6kqXJfcqI5xWMzvNKdNbYghXQ2-pru-9Le0IHnSL9qW4SfKIYLkZJXVqe9OgATLck738zR_OtRizyAlh2VfplDmPhgNctr6qNmz9BLGKEVpXMwiMXV7PLhktaDSFC4eBdVuwjDb7Bj60CZYyJkgxh-_j0YestZbQ5b6LiMjGw3x0uQtCYHN5MEgSyM2kdKoOpOm7c5wjgHIE_y-OY5oQWc1gjQEM5DvVmfIssAkVvSwUmm36h34Bs4r8ZbXIlF-qxkb5m9GYh41DEkoZF-8SeeUcu5Buf3NzwMTzAR1c7NX_xm9zPxwAiLJf7XItnCMpIzRMlNGJiOmh2-3OXdne7ZO2OOwSyjuijMjXgmTFi9LotfMjlFnI6OX4ckym-gDZNE2rXPwT74GlkGReLegzr523bE9m3ixtlRU5kShDG9bQWpbAdR4oDdSJIzJ7xJXTXizGBhhPGcfoLKZyfNWPwA^%^3AJ_rhXVuUK5kNqArx^%^3ANjuYy2xv0x1GGdW_nY5h9Q; wd=1127x953^" ^
  -H ^"origin: https://muse.ai^" ^
  -H ^"priority: u=1, i^" ^
  -H ^"referer: https://muse.ai/^" ^
  -H ^"sec-ch-prefers-color-scheme: light^" ^
  -H ^"sec-ch-ua: ^\^"Chromium^\^";v=^\^"154^\^", ^\^"Google Chrome^\^";v=^\^"154^\^", ^\^"Not A^(Brand^\^";v=^\^"99^\^"^" ^
  -H ^"sec-ch-ua-mobile: ?0^" ^
  -H ^"sec-ch-ua-platform: ^\^"Windows^\^"^" ^
  -H ^"sec-fetch-dest: empty^" ^
  -H ^"sec-fetch-mode: cors^" ^
  -H ^"sec-fetch-site: same-origin^" ^
  -H ^"sentry-trace: 739a01817007cea282bfe10297d46eca-a4d89b583911e0f6-0^" ^
  -H ^"user-agent: Mozilla/5.0 ^(Windows NT 10.0; Win64; x64^) AppleWebKit/537.36 ^(KHTML, like Gecko^) Chrome/154.0.0.0 Safari/537.36^" ^
  -H ^"x-hatch-caa-reg-entry-point: login_home^" ^
  -H ^"x-hatch-csrf-token: BFFTkOWGQdPEshOzv2JwWLZ_FNmfURByhEVwGYI0bCc^" ^
  -H ^"x-hatch-waterfall-id: 9e8c73d9-3a40-4b6a-a22c-c54d4c43fd07^" ^
  --data-raw ^"^{^\^"contact_point^\^":^\^"evident43^@maxxspace.com^\^",^\^"region^\^":^\^"US^\^"^}^"
res
{
    "registration_state": "otp_sent",
    "password_login_available": false,
    "flow": "register"
}
curl --url ^"https://muse.ai/api/auth/native/confirm-otp^" ^
  -H ^"accept: */*^" ^
  -H ^"accept-language: en-US,en;q=0.9^" ^
  -H ^"baggage: sentry-environment=production,sentry-release=e1d76cb7a5b8ac96a0e047dead8929c2aced75d6,sentry-public_key=1287bc3f888b18f8dd43e7c289c0adea,sentry-trace_id=739a01817007cea282bfe10297d46eca,sentry-org_id=4509963614355457,sentry-sample_rand=0.7125126021826398,sentry-sample_rate=0.004^" ^
  -H ^"content-type: application/json^" ^
  -b ^"datr=ixXCatXHQp-ueu8ypyjxN10B; dpr=1; hatch_native_auth_csrf=BFFTkOWGQdPEshOzv2JwWLZ_FNmfURByhEVwGYI0bCc.qihyTxkmphCqeG8gt2lz1kEeS_BfZfhFVbDum5jSWwY; hatch_native_auth_temp=v1^%^3AnO86e7KdpadGjfqGsSm0GpirgtjJYMwHKcmvd80GCgvsQ2BnOQJbJflgrZpXBZYmit25yyBp4Eb2P1-Y7d02I5CDqdo46CNvVo64UZMDu0Sgh33yA54CIbR4TfxFPeJqAJFEcIt1Vt6tbFkeXf9Yb9yaPLdsxp9b59dBBMGZQBJ1PXco25he9zYcYNuw8JXb3nDHhKvXcG1UQftm0Mb834swxL7xSM_v3dnjBiCVWS_EaV6UqV8p22pQ9RhKSBzyjW2y1A9o8E2ZI_QPc5RvkQ7g9v_aamr-riMcN4rfxjmfBBNCT9zDyh2x1O0stjF637A0wPm3W7s^%^3ApnEB_Hq5-JnQHxUL^%^3AWvOX60ox87sU47wybJh-nA; hatch_native_auth_device=v1^%^3As9YYxV8y77ajqNjkeL16cwQjlO8sPqpZ4ceQA3hh0V45kf4cQQhoZ8zMaQ^%^3ADewHISDsYjRRAYYx^%^3A1nlop3Bbi_gAnxDSBU5vAg; wd=1127x953; hatch_native_auth_state=v1^%^3ASsJcxUi0ghuxaNj6DuGTum5zOG4yH9moNPcJUvJr4X0O3iOyUloYY4q0Rlw9oIPkrHWh0ZI2tpEuY4QWlhXoC3yJ9g4i9i3Gx4yHpD8jdJkDIq8FA9yThzv49lkXNFHFd1p71Du-YMwXix9kR7-VLll0HxxfxxiTUB3ppAWr76El17xXVpU3wQoJ8ElBKgjF6XyPPfbBGz0XpXv4KvED8pPTk0WilbU7F-TeN76-CvebpFgbjQj6lvm4_ipUzRmOVGQ-brvLYrmb1gziTnE9QRlJfa26yJwqhWKGOLCHxKx2doCXfxbbjYkjBZikaCiuAGuDriT3YdF3pmOv8q8cmRCZc-YL-M941rpOIciAJu67LyuXJEfWz5y3vMdjx9XBQlpTwrCbIVDQEzry5pKCTxl0VzwhGHO1hr0J_h_NYXgLS87LD-hWkCRISLPBFMrNW3ipgsx8XEjiduup0b7_N4bRM2dhxBlJeLwRNV8VohTyjT6-5IFGnJDmBpfLoeVQlFCVz_4-g5PwtvYlF5FRodvGirxleMrd2R4EWaR_rKWa3-z5J7jsArigbOgAnGxdy99JAQefhYa0lbeOlE7jviUmdV9m6bw-S01NPEmaFtEd6CuT7hXsSYjvWZSv39qnCzcW1FtkHt4MeggD1NRo8wyeUE5rZfGhaaE91ihIXnng2GXpk7fBzj8HvLJqrevcllOBS6yDtuLuSwY2NP0mnrGmWJdrekBA3G8WD-8dHfWBtMfM17ipTMvrutcBGbIq-jltteRwlNxnFQqnOUkrPj2Do8FW-KCjQdil2mHRx3SlbfTXLLksIxkYAqPxUQXUaMm-HgQIcTfOk73eCdeRHFYG0Z6E9BmIbVh7ViDFqHqY-EWm1qXy_irqzRKMaQ6eJwUq2xgYSQ^%^3AFdnODSWVpipoUTY-^%^3AoypKRXSblBQmeQcCMNKEcQ^" ^
  -H ^"origin: https://muse.ai^" ^
  -H ^"priority: u=1, i^" ^
  -H ^"referer: https://muse.ai/^" ^
  -H ^"sec-ch-prefers-color-scheme: light^" ^
  -H ^"sec-ch-ua: ^\^"Chromium^\^";v=^\^"154^\^", ^\^"Google Chrome^\^";v=^\^"154^\^", ^\^"Not A^(Brand^\^";v=^\^"99^\^"^" ^
  -H ^"sec-ch-ua-mobile: ?0^" ^
  -H ^"sec-ch-ua-platform: ^\^"Windows^\^"^" ^
  -H ^"sec-fetch-dest: empty^" ^
  -H ^"sec-fetch-mode: cors^" ^
  -H ^"sec-fetch-site: same-origin^" ^
  -H ^"sentry-trace: 739a01817007cea282bfe10297d46eca-bb60e7e59b96b8be-0^" ^
  -H ^"user-agent: Mozilla/5.0 ^(Windows NT 10.0; Win64; x64^) AppleWebKit/537.36 ^(KHTML, like Gecko^) Chrome/154.0.0.0 Safari/537.36^" ^
  -H ^"x-hatch-caa-reg-entry-point: login_home^" ^
  -H ^"x-hatch-csrf-token: BFFTkOWGQdPEshOzv2JwWLZ_FNmfURByhEVwGYI0bCc^" ^
  -H ^"x-hatch-waterfall-id: 9e8c73d9-3a40-4b6a-a22c-c54d4c43fd07^" ^
  --data-raw ^"^{^\^"otp_code^\^":^\^"779250^\^"^}^"
res
{
    "registration_state": "completion_required",
    "masked_contact": "e***@maxxspace.com",
    "tos": {
        "clause": [
            {
                "text": "By tapping "
            },
            {
                "text": "Confirm"
            },
            {
                "text": ", you'll create a Meta Account and agree to these "
            },
            {
                "text": "terms",
                "token": "terms"
            },
            {
                "text": " and "
            },
            {
curl --url ^"https://muse.ai/api/auth/native/register-completion^" ^
  -H ^"accept: */*^" ^
  -H ^"accept-language: en-US,en;q=0.9^" ^
  -H ^"baggage: sentry-environment=production,sentry-release=e1d76cb7a5b8ac96a0e047dead8929c2aced75d6,sentry-public_key=1287bc3f888b18f8dd43e7c289c0adea,sentry-trace_id=739a01817007cea282bfe10297d46eca,sentry-org_id=4509963614355457,sentry-sample_rand=0.7125126021826398,sentry-sample_rate=0.004^" ^
  -H ^"content-type: application/json^" ^
  -b ^"datr=ixXCatXHQp-ueu8ypyjxN10B; dpr=1; hatch_native_auth_csrf=BFFTkOWGQdPEshOzv2JwWLZ_FNmfURByhEVwGYI0bCc.qihyTxkmphCqeG8gt2lz1kEeS_BfZfhFVbDum5jSWwY; hatch_native_auth_temp=v1^%^3AnO86e7KdpadGjfqGsSm0GpirgtjJYMwHKcmvd80GCgvsQ2BnOQJbJflgrZpXBZYmit25yyBp4Eb2P1-Y7d02I5CDqdo46CNvVo64UZMDu0Sgh33yA54CIbR4TfxFPeJqAJFEcIt1Vt6tbFkeXf9Yb9yaPLdsxp9b59dBBMGZQBJ1PXco25he9zYcYNuw8JXb3nDHhKvXcG1UQftm0Mb834swxL7xSM_v3dnjBiCVWS_EaV6UqV8p22pQ9RhKSBzyjW2y1A9o8E2ZI_QPc5RvkQ7g9v_aamr-riMcN4rfxjmfBBNCT9zDyh2x1O0stjF637A0wPm3W7s^%^3ApnEB_Hq5-JnQHxUL^%^3AWvOX60ox87sU47wybJh-nA; hatch_native_auth_device=v1^%^3As9YYxV8y77ajqNjkeL16cwQjlO8sPqpZ4ceQA3hh0V45kf4cQQhoZ8zMaQ^%^3ADewHISDsYjRRAYYx^%^3A1nlop3Bbi_gAnxDSBU5vAg; wd=1127x953; hatch_native_auth_state=v1^%^3AlI6D5dBOFGA-IFgsDqw31l3qA45CWTNd1qI4OXmsruO3c-itlRmYi-_ENTyMletZUHUz0-wYrA6yxaZ3sf5AN_OuxqqMcrntRYUowuK4K8M5MEelrXAp0hRwXZa6kyc5oGelTzEkOHgMRJGHIcjFlFCbEDMINBwc_MB6MKC17yBEU0Ld28C5KA2iflb9JIBXh-wroCD_w1pyMbGrf6edrcjLWkerejM4D3hikwY3pmnXkpN12nu-hV1gpjCytENJpOKk1NfvXJ4ROleD3xHxGMNoq69XhU4egstT2KDCvHgp1x16CfgiKFo0_hnFPbcEL5TXdtQjl6R-u6q52ewpac6ojG-2zlMVpP3Olfpkx4PtuH8xMbeG6LHDUEq0nKTFLjadh1_QcFtOPn6e85j7KLqM1qKZISoOKbZmpmnFAn7HtVN6vk9Yd5EjWwx05HxTh_-w2zDu7y_ZvNjC1aPQQTU6aQefKi_G79GZEmjXUdNQADHm5YDIOF6QO-3bbkqFWfCW2kGJJgxcpDlKnZTpHDO9KvDSWs_IOQkbhJ6Pm6W_vA1ZA_WmN1yiKODgzZxdDyGcK0oumEo0MEUXyBpLSlCEdcvhANAcafhJoaECRyWuWxXdxtLOi9acHcNI811l937pt5N98Ym3_01Qz-To3-mbMTHXWaFZF_FPN4eAE9uW_51aQ5gZepzIgVI89Z3VvJTsJ_ggoNlgPXJc5XB9ofVbWGTRFcgffZ66-dTx801KtMvLlwMKBT6p1tPPpqrwXu41uZvkSrWzFAxqbDZK-Mq1nY-47CbUMAH-Q_c7_F6Q-OYR9vN46sEsKDHsyDYrobaEtSMz2-PIG-5l5IVQYZVzPffb5ovDA8iVNPcUCuw6ji3QPCQs0VRjVvn4HmsLbgs7u9ISWMiHOGPHKE_NItzZV__A5OZJk7U-rWuhnTsQ0O4fICBRqywjsZUQwwYgmV_icGLzQOzirEgwZsANPg6Oed6QnerjcJF_IRppARIxZLARAhhXgZjfF_ke_18Sn0TmJgCce01w_oxwNd_I9PboM1GNq5B2Om3X2ImQqXywtYw2YstDofWhBah5a6t2kEsMiw^%^3AZisT_-2ZmgnpnHyB^%^3AxHuS_gKMiUi9jMGauEPmRw^" ^
  -H ^"origin: https://muse.ai^" ^
  -H ^"priority: u=1, i^" ^
  -H ^"referer: https://muse.ai/^" ^
  -H ^"sec-ch-prefers-color-scheme: light^" ^
  -H ^"sec-ch-ua: ^\^"Chromium^\^";v=^\^"154^\^", ^\^"Google Chrome^\^";v=^\^"154^\^", ^\^"Not A^(Brand^\^";v=^\^"99^\^"^" ^
  -H ^"sec-ch-ua-mobile: ?0^" ^
  -H ^"sec-ch-ua-platform: ^\^"Windows^\^"^" ^
  -H ^"sec-fetch-dest: empty^" ^
  -H ^"sec-fetch-mode: cors^" ^
  -H ^"sec-fetch-site: same-origin^" ^
  -H ^"sentry-trace: 739a01817007cea282bfe10297d46eca-afcf5f6e99fe9618-0^" ^
  -H ^"user-agent: Mozilla/5.0 ^(Windows NT 10.0; Win64; x64^) AppleWebKit/537.36 ^(KHTML, like Gecko^) Chrome/154.0.0.0 Safari/537.36^" ^
  -H ^"x-hatch-caa-reg-entry-point: login_home^" ^
  -H ^"x-hatch-csrf-token: BFFTkOWGQdPEshOzv2JwWLZ_FNmfURByhEVwGYI0bCc^" ^
  -H ^"x-hatch-waterfall-id: 9e8c73d9-3a40-4b6a-a22c-c54d4c43fd07^" ^
  --data-raw ^"^{^\^"date_of_birth^\^":^\^"1999-10-04^\^",^\^"tos_content_version^\^":^\^"ntm_create_account:default_v1_meta_account_v2+docs_v1^\^"^}^"
xong thi
curl --url ^"https://muse.ai/api/hatch/accept-tos^" ^
  -H ^"accept: */*^" ^
  -H ^"accept-language: en-US,en;q=0.9^" ^
  -H ^"baggage: sentry-environment=production,sentry-release=e1d76cb7a5b8ac96a0e047dead8929c2aced75d6,sentry-public_key=1287bc3f888b18f8dd43e7c289c0adea,sentry-trace_id=d0ccac8fbfef4eb68b2abdc837eb7206,sentry-org_id=4509963614355457,sentry-sample_rand=0.3343681339305,sentry-sample_rate=0.004^" ^
  -H ^"cache-control: no-cache^" ^
  -H ^"content-type: application/json^" ^
  -b ^"datr=ixXCatXHQp-ueu8ypyjxN10B; dpr=1; hatch_native_auth_temp=v1^%^3AnO86e7KdpadGjfqGsSm0GpirgtjJYMwHKcmvd80GCgvsQ2BnOQJbJflgrZpXBZYmit25yyBp4Eb2P1-Y7d02I5CDqdo46CNvVo64UZMDu0Sgh33yA54CIbR4TfxFPeJqAJFEcIt1Vt6tbFkeXf9Yb9yaPLdsxp9b59dBBMGZQBJ1PXco25he9zYcYNuw8JXb3nDHhKvXcG1UQftm0Mb834swxL7xSM_v3dnjBiCVWS_EaV6UqV8p22pQ9RhKSBzyjW2y1A9o8E2ZI_QPc5RvkQ7g9v_aamr-riMcN4rfxjmfBBNCT9zDyh2x1O0stjF637A0wPm3W7s^%^3ApnEB_Hq5-JnQHxUL^%^3AWvOX60ox87sU47wybJh-nA; hatch_native_auth_device=v1^%^3As9YYxV8y77ajqNjkeL16cwQjlO8sPqpZ4ceQA3hh0V45kf4cQQhoZ8zMaQ^%^3ADewHISDsYjRRAYYx^%^3A1nlop3Bbi_gAnxDSBU5vAg; wd=1127x953; hatch_sess=9719d593-61e6-469b-ad41-6167d3420461.v1^%^3A1_G7BcJXfbAGwUXf-ZzJFgN-Z9hJHU__0sR2vij_KdiyHwr4-ELsUjh1LNza1dohuNVvmxWmWT0x4ZPnS4Q9X30zoCe5OBi5TDeINwwj-qRCeWE9IVjmibe2nvvGqZo5ntx4XN16ve90fUJNFse3a0x5IDL62o_dzczGyO3oYKFdd5AQaKll_LlDafQP7LBX1S04e7rVdXUZ2bra6_krq2kRwXfj1gNsoXBAogigBvtuXh5Qsqvb-z_yk_DL7ekSl-MCU_aNzNXa0Oi9qcSvaRp81PrF6z5P2qOYara6tFxBL0H7AdqF8wOgpHfxPPuVZ_mom6vzD706c60vzDBl8w71l7uWKCZisCjkJ9qnehM_GViiAzIZOWm6CQMkK4-0kPJOlbj21kXqdXSMcNMZrKVqUtuDO3sGD15T0VYFFc2f3NxFnS8_NeuTIri82Esu-IFQSuzmwUixvkxxQawVfOJ9^%^3AR16zlRg1OA_8tIfJ^%^3AphS9GT2XQpYdWlBgVDFRUQ.jUFc8cOBpm9oXLFRNRyxJ5LYrJ7rINbq6JyZSIAkeWU; _fbp=fb.1.1791104863591.582476574402585982^" ^
  -H ^"origin: https://muse.ai^" ^
  -H ^"pragma: no-cache^" ^
  -H ^"priority: u=1, i^" ^
  -H ^"referer: https://muse.ai/access/disclosure^" ^
  -H ^"sec-ch-prefers-color-scheme: light^" ^
  -H ^"sec-ch-ua: ^\^"Chromium^\^";v=^\^"154^\^", ^\^"Google Chrome^\^";v=^\^"154^\^", ^\^"Not A^(Brand^\^";v=^\^"99^\^"^" ^
  -H ^"sec-ch-ua-mobile: ?0^" ^
  -H ^"sec-ch-ua-platform: ^\^"Windows^\^"^" ^
  -H ^"sec-fetch-dest: empty^" ^
  -H ^"sec-fetch-mode: cors^" ^
  -H ^"sec-fetch-site: same-origin^" ^
  -H ^"sentry-trace: d0ccac8fbfef4eb68b2abdc837eb7206-b29e0eec69b0aad7-0^" ^
  -H ^"user-agent: Mozilla/5.0 ^(Windows NT 10.0; Win64; x64^) AppleWebKit/537.36 ^(KHTML, like Gecko^) Chrome/154.0.0.0 Safari/537.36^" ^
  --data-raw ^"^{^\^"saw_meta_ai_tos^\^":false,^\^"client_request_timestamp^\^":^\^"1791104889^\^",^\^"entry_point^\^":^\^"web_onboarding_flow^\^",^\^"nux_type^\^":^\^"ROW^\^",^\^"disclosure_version^\^":^\^"HATCH_ROW_v0^\^",^\^"disclosure_text^\^":^\^"By continuing, you agree to the Muse Terms and Meta's AI Terms, which include important information about your rights and responsibilities. Learn more about Muse's approach to privacy in the Muse Privacy Policy.^\^"^}^"
{"success":true}
curl --url ^"https://muse.ai/api/checkout/init^" ^
  -H ^"accept: */*^" ^
  -H ^"accept-language: en-US,en;q=0.9^" ^
  -H ^"baggage: sentry-environment=production,sentry-release=e1d76cb7a5b8ac96a0e047dead8929c2aced75d6,sentry-public_key=1287bc3f888b18f8dd43e7c289c0adea,sentry-trace_id=503ba4fa577a6759a3b96b49be3a6695,sentry-org_id=4509963614355457,sentry-sample_rand=0.5503700048099763,sentry-sample_rate=0.004^" ^
  -H ^"cache-control: no-cache^" ^
  -H ^"content-type: application/json^" ^
  -b ^"datr=ixXCatXHQp-ueu8ypyjxN10B; dpr=1; hatch_native_auth_temp=v1^%^3AnO86e7KdpadGjfqGsSm0GpirgtjJYMwHKcmvd80GCgvsQ2BnOQJbJflgrZpXBZYmit25yyBp4Eb2P1-Y7d02I5CDqdo46CNvVo64UZMDu0Sgh33yA54CIbR4TfxFPeJqAJFEcIt1Vt6tbFkeXf9Yb9yaPLdsxp9b59dBBMGZQBJ1PXco25he9zYcYNuw8JXb3nDHhKvXcG1UQftm0Mb834swxL7xSM_v3dnjBiCVWS_EaV6UqV8p22pQ9RhKSBzyjW2y1A9o8E2ZI_QPc5RvkQ7g9v_aamr-riMcN4rfxjmfBBNCT9zDyh2x1O0stjF637A0wPm3W7s^%^3ApnEB_Hq5-JnQHxUL^%^3AWvOX60ox87sU47wybJh-nA; hatch_native_auth_device=v1^%^3As9YYxV8y77ajqNjkeL16cwQjlO8sPqpZ4ceQA3hh0V45kf4cQQhoZ8zMaQ^%^3ADewHISDsYjRRAYYx^%^3A1nlop3Bbi_gAnxDSBU5vAg; wd=1127x953; hatch_sess=9719d593-61e6-469b-ad41-6167d3420461.v1^%^3A1_G7BcJXfbAGwUXf-ZzJFgN-Z9hJHU__0sR2vij_KdiyHwr4-ELsUjh1LNza1dohuNVvmxWmWT0x4ZPnS4Q9X30zoCe5OBi5TDeINwwj-qRCeWE9IVjmibe2nvvGqZo5ntx4XN16ve90fUJNFse3a0x5IDL62o_dzczGyO3oYKFdd5AQaKll_LlDafQP7LBX1S04e7rVdXUZ2bra6_krq2kRwXfj1gNsoXBAogigBvtuXh5Qsqvb-z_yk_DL7ekSl-MCU_aNzNXa0Oi9qcSvaRp81PrF6z5P2qOYara6tFxBL0H7AdqF8wOgpHfxPPuVZ_mom6vzD706c60vzDBl8w71l7uWKCZisCjkJ9qnehM_GViiAzIZOWm6CQMkK4-0kPJOlbj21kXqdXSMcNMZrKVqUtuDO3sGD15T0VYFFc2f3NxFnS8_NeuTIri82Esu-IFQSuzmwUixvkxxQawVfOJ9^%^3AR16zlRg1OA_8tIfJ^%^3AphS9GT2XQpYdWlBgVDFRUQ.jUFc8cOBpm9oXLFRNRyxJ5LYrJ7rINbq6JyZSIAkeWU; _fbp=fb.1.1791104863591.582476574402585982^" ^
  -H ^"origin: https://muse.ai^" ^
  -H ^"pragma: no-cache^" ^
  -H ^"priority: u=1, i^" ^
  -H ^"referer: https://muse.ai/access/verification^" ^
  -H ^"sec-ch-prefers-color-scheme: light^" ^
  -H ^"sec-ch-ua: ^\^"Chromium^\^";v=^\^"154^\^", ^\^"Google Chrome^\^";v=^\^"154^\^", ^\^"Not A^(Brand^\^";v=^\^"99^\^"^" ^
  -H ^"sec-ch-ua-mobile: ?0^" ^
  -H ^"sec-ch-ua-platform: ^\^"Windows^\^"^" ^
  -H ^"sec-fetch-dest: empty^" ^
  -H ^"sec-fetch-mode: cors^" ^
  -H ^"sec-fetch-site: same-origin^" ^
  -H ^"sentry-trace: 503ba4fa577a6759a3b96b49be3a6695-81f4f9eb0ea48aa5-0^" ^
  -H ^"user-agent: Mozilla/5.0 ^(Windows NT 10.0; Win64; x64^) AppleWebKit/537.36 ^(KHTML, like Gecko^) Chrome/154.0.0.0 Safari/537.36^" ^
  --data-raw ^"^{^\^"sessionId^\^":^\^"upl_1791104913080_20ee30e0-005a-49b5-af2e-a1b73261911f^\^",^\^"productId^\^":^\^"766358168544755^\^",^\^"receiverId^\^":^\^"352501280694489^\^",^\^"productData^\^":^[^]^}^"
lam folder riêng nhe bro dung hotmail nhe bro ok lam d
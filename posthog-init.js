// posthog-init.js
// Loads and initializes PostHog analytics for browser usage
(function(t,e){
    var o,n,p,r;
    if (!e.__SV) {
        window.posthog = e;
        e._i = [];
        e.init = function(i,s,a){
            function g(t,e){
                var o = e.split(".");
                if (o.length == 2) {
                    t = t[o[0]];
                    e = o[1];
                }
                t[e] = function(){
                    t.push([e].concat(Array.prototype.slice.call(arguments,0)));
                }
            }
            p = t.createElement("script");
            p.type = "text/javascript";
            p.crossOrigin = "anonymous";
            p.async = true;
            p.src = s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js";
            r = t.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(p,r);
            var u = e;
            if (a !== undefined) {
                u = e[a] = [];
            } else {
                a = "posthog";
            }
            u.people = u.people || [];
            u.toString = function(t){
                var e = "posthog";
                if (a !== "posthog") e += "." + a;
                if (!t) e += " (stub)";
                return e;
            };
            u.people.toString = function(){
                return u.toString(1) + ".people (stub)";
            };
            o = "init Ie Ts Ms Ee Es Rs capture Ge calculateEventProperties Os register register_once register_for_session unregister unregister_for_session js getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Ds Fs createPersonProfile Ls Ps opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Cs debug I As getPageViewId captureTraceFeedback captureTraceMetric".split(" ");
            for (n = 0; n < o.length; n++) g(u, o[n]);
            e._i.push([i, s, a]);
        };
        e.__SV = 1;
    }
})(document, window.posthog || []);

// Initialize PostHog with your project API key and options
posthog.init('phc_ixXIJqD8LUTUZrV6YquY1qrcAo6gvLxZMNikayiRpoV', {
    api_host: 'https://us.i.posthog.com',
    defaults: '2025-05-24',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
});

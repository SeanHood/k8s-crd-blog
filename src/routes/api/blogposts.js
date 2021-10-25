
const kubeapiurl = 'http://localhost:8080'
const crdGroup = 'crds.snhd.co'
const crdVersion = 'v1'
const namespace = 'default'

let baseURL = `${kubeapiurl}/apis/${crdGroup}/${crdVersion}/namespaces/${namespace}`


export async function get() {
    const url = `${baseURL}/blogposts`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })

    if (res.ok) {
      return {
        body: await res.json()
      }
    }

    return {
		body: {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		}
     }
  }
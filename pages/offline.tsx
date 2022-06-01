import { Layout } from '@components/common/Layout'

const offline = () => {
  return (
    <Layout>
      <div className="text-center my-auto">
        <h4 className="my-1">Anda offline</h4>
        <p>
          Halaman ini tidak dapat ditampilkan karena Anda tidak terhubung ke
          internet
        </p>
      </div>
    </Layout>
  )
}

export default offline

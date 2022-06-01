import { ArticlesList } from '@components/article'
import { Layout } from '@components/common/Layout'
import Bookmark from '@components/icons/Bookmark'
import { useList } from '@lib/hooks/use-list'

const ListsPage = () => {
  const { list } = useList()

  return (
    <Layout>
      {list && list.length !== 0 ? (
        <ArticlesList
          articles={list}
          title={
            list.length === 1
              ? `${list.length} Article`
              : `${list.length} Articles`
          }
          variant="lists"
        />
      ) : (
        <div className="text-center my-auto">
          <p>Anda belum menyimpan apa pun.</p>
          <p>
            Ketuk Ikon{' '}
            <span>
              <Bookmark className="inline-block" />
            </span>{' '}
            Untuk Menyimpan Dan Membacanya Nanti.
          </p>
        </div>
      )}
    </Layout>
  )
}

export default ListsPage

using System.Threading.Tasks;
using vega.Core;

namespace vega.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly VegaDbContext context;
        public UnitOfWork(VegaDbContext context)
        {
            this.context = context;

        }
        async Task IUnitOfWork.CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}
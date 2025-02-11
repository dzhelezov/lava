package keeper

import (
	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/lavanet/lava/x/dualstaking/types"
	epochstoragetypes "github.com/lavanet/lava/x/epochstorage/types"
)

// GetBondedPool returns the bonded tokens pool's module account
func (k Keeper) GetBondedPool(ctx sdk.Context) (bondedPool authtypes.ModuleAccountI) {
	return k.accountKeeper.GetModuleAccount(ctx, types.BondedPoolName)
}

// GetNotBondedPool returns the not bonded tokens pool's module account
func (k Keeper) GetNotBondedPool(ctx sdk.Context) (notBondedPool authtypes.ModuleAccountI) {
	return k.accountKeeper.GetModuleAccount(ctx, types.NotBondedPoolName)
}

// bondedTokensToNotBonded transfers coins from the bonded to the not bonded pool within staking
func (k Keeper) bondedTokensToNotBonded(ctx sdk.Context, tokens math.Int) {
	coins := sdk.NewCoins(sdk.NewCoin(epochstoragetypes.TokenDenom, tokens))
	if err := k.bankKeeper.SendCoinsFromModuleToModule(ctx, types.BondedPoolName, types.NotBondedPoolName, coins); err != nil {
		panic(err)
	}
}

// notBondedTokensToBonded transfers coins from the not bonded to the bonded pool within staking
func (k Keeper) notBondedTokensToBonded(ctx sdk.Context, tokens math.Int) {
	coins := sdk.NewCoins(sdk.NewCoin(epochstoragetypes.TokenDenom, tokens))
	if err := k.bankKeeper.SendCoinsFromModuleToModule(ctx, types.NotBondedPoolName, types.BondedPoolName, coins); err != nil {
		panic(err)
	}
}

// burnBondedTokens removes coins from the bonded pool module account
func (k Keeper) burnBondedTokens(ctx sdk.Context, amt math.Int) error {
	if !amt.IsPositive() {
		// skip as no coins need to be burned
		return nil
	}

	coins := sdk.NewCoins(sdk.NewCoin(epochstoragetypes.TokenDenom, amt))

	return k.bankKeeper.BurnCoins(ctx, types.BondedPoolName, coins)
}

// burnNotBondedTokens removes coins from the not bonded pool module account
func (k Keeper) burnNotBondedTokens(ctx sdk.Context, amt math.Int) error {
	if !amt.IsPositive() {
		// skip as no coins need to be burned
		return nil
	}

	coins := sdk.NewCoins(sdk.NewCoin(epochstoragetypes.TokenDenom, amt))

	return k.bankKeeper.BurnCoins(ctx, types.NotBondedPoolName, coins)
}

// totalNotBondedTokens total staking tokens supply which is not bonded
func (k Keeper) TotalNotBondedTokens(ctx sdk.Context) math.Int {
	notBondedPoolAddr := k.accountKeeper.GetModuleAddress(types.NotBondedPoolName)
	return k.bankKeeper.GetBalance(ctx, notBondedPoolAddr, epochstoragetypes.TokenDenom).Amount
}

// totalBondedTokens total staking tokens supply which is bonded
func (k Keeper) TotalBondedTokens(ctx sdk.Context) math.Int {
	bondedPoolAddr := k.accountKeeper.GetModuleAddress(types.BondedPoolName)
	return k.bankKeeper.GetBalance(ctx, bondedPoolAddr, epochstoragetypes.TokenDenom).Amount
}

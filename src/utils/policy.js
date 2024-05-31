export function toPolicyLabel(input) {
  if (input.ChangeConfig != null) {
    return 'config';
  } else if (input.ChangePolicy != null) {
    return 'policy';
  } else if (input.AddMemberToRole != null) {
    return 'add_member_to_role';
  } else if (input.RemoveMemberFromRole != null) {
    return 'remove_member_from_role';
  } else if (input.FunctionCall != null) {
    return 'FunctionCall';
  } else if (input.UpgradeSelf != null) {
    return 'upgrade_self';
  } else if (input.UpgradeRemote != null) {
    return 'upgrade_remote';
  } else if (input.Transfer != null) {
    return 'transfer';
  } else if (input.SetStakingContract != null) {
    return 'set_vote_token';
  } else if (input.AddBounty != null) {
    return 'add_bounty';
  } else if (input.BountyDone != null) {
    return 'bounty_done';
  } else if (input.Vote != null) {
    return 'vote';
  } else if (input.FactoryInfoUpdate != null) {
    return 'factory_info_update';
  } else if (input.ChangePolicyAddOrUpdateRole != null) {
    return 'policy_add_or_update_role';
  } else if (input.ChangePolicyRemoveRole != null) {
    return 'policy_remove_role';
  } else if (input.ChangePolicyUpdateDefaultVotePolicy != null) {
    return 'policy_update_default_vote_policy';
  } else if (input.ChangePolicyUpdateParameters != null) {
    return 'policy_update_parameters';
  }
  throw new Error();
}

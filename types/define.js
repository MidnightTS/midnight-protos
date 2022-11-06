"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeMcoinType = exports.SegmentCRCModuleType = exports.CodexType = exports.SecurityCheckType = exports.SalesmanStatusType = exports.LuaShellType = exports.LuaShellNotifyType = exports.MatchReason = exports.OpActivityType = exports.MpPlayType = exports.MatchType = exports.GroupLoadStrategy = exports.GadgetGuestBanDrop = exports.MonsterGuestBanDrop = exports.DungeonCandidateTeamInviteState = exports.MapMarkFromType = exports.MapMarkPointType = exports.PlatformType = exports.LanguageType = exports.LoginRewardConfigType = exports.MathExpressionType = exports.MpSettingType = exports.MailCollectState = exports.EventTriggerType = exports.AvatarType = exports.AvatarExpeditionState = exports.FetterState = exports.PlayerDieOption = exports.PlayerDieType = exports.ChangHpReason = exports.FoundationStatus = exports.GadgetPlayType = exports.MovingPlatformType = exports.GadgetBornType = exports.MonsterBornType = exports.VehicleSlot = exports.NpcTalkState = exports.ProtEntityType = exports.MotionState = exports.AbilityScalarType = exports.VirtualItem = exports.StoreType = exports.ActionReasonType = exports.RegionType = exports.ClientType = exports.ServiceType = exports.ChannelIdType = exports.AccountType = exports.ENetReason = exports.TrialAvatarGrantRecord_GrantReason = void 0;
exports.Reward = exports.EquipParamList = exports.EquipParam = exports.ItemParam = exports.Item = exports.Furniture = exports.Equip = exports.Material = exports.MaterialDeleteInfo_DelayWeekCountDownDelete = exports.MaterialDeleteInfo_DateTimeDelete = exports.MaterialDeleteInfo_CountDownDelete = exports.MaterialDeleteInfo = exports.Weapon = exports.Reliquary = exports.PlayerUidExtInfo = exports.QueryCurrRegionHttpRsp = exports.RegionInfo = exports.ResVersionConfig = exports.StopServerInfo = exports.ForceUpdateInfo = exports.QueryRegionListHttpRsp = exports.RegionSimpleInfo = exports.Uint32Pair = exports.PropValue = exports.ParamList = exports.AuditState = exports.AranaraCollectionState = exports.CityidConstValue = exports.SceneidConstValue = exports.PlatformCategory = exports.CustomDungeonEvent = exports.ClientInputType = exports.GroupVariableType = exports.LunaRiteHintPointType = exports.LunaRiteHintStatusType = exports.CreateGadgetReason = exports.DungeonCandidateTeamPlayerState = exports.LeaveWorldReason = exports.ChatChannel = exports.FriendEnterHomeOption = exports.EnterReason = exports.ExpeditionState = exports.MapMarkTipsType = exports.ReportReasonType = exports.FeatureBlockType = exports.PlayerTag = exports.RegionSearchState = exports.HuntingOfferState = exports.AsterLittleStageState = exports.ExploreType = void 0;
exports.FoundationInfo = exports.BuildingInfo = exports.OfferingInfo = exports.GadgetGeneralRewardInfo = exports.MpPlayRewardInfo = exports.GadgetPlayInfo = exports.GadgetCrucibleInfo = exports.BlossomChestInfo = exports.BossChestInfo = exports.WeeklyBossResinDiscountInfo = exports.StatueGadgetInfo = exports.GatherGadgetInfo = exports.AbilityGadgetInfo = exports.ClientGadgetInfo = exports.WeatherInfo = exports.MonsterRoute = exports.Route = exports.RoutePoint = exports.PlatformInfo = exports.MathQuaternion = exports.WorktopInfo = exports.SceneNpcInfo = exports.SceneMonsterInfo = exports.FishtankFishInfo = exports.SceneFishInfo = exports.SceneAvatarInfo = exports.AvatarExcelInfo = exports.CurVehicleInfo = exports.ServerBuff = exports.SceneReliquaryInfo = exports.SceneWeaponInfo = exports.PlaceInfo = exports.MotionInfo = exports.EntityMoveInfo = exports.Vector3Int = exports.VectorPlane = exports.Vector = exports.AbilityControlBlock = exports.AbilityEmbryo = exports.AbilitySyncStateInfo = exports.AbilityMixinRecoverInfo = exports.MassivePropSyncInfo = exports.MassivePropParam = exports.AbilityAppliedModifier = exports.ModifierDurability = exports.AbilityAttachedModifier = exports.AbilityAppliedAbility = exports.AbilityScalarValueEntry = exports.AbilityFloatValue = exports.AbilityString = void 0;
exports.ServerMassiveEntity = exports.ShapeBox = exports.ShapeSphere = exports.ClientMassiveEntity = exports.MassiveBoxInfo = exports.MassiveGrassInfo = exports.MassiveWaterInfo = exports.MapMarkPoint = exports.Birthday = exports.OnlinePlayerInfo = exports.MailData = exports.MailItem = exports.MailTextContent = exports.NpcPositionInfo = exports.Quest = exports.ShowAvatarInfo = exports.ShowEquip = exports.AvatarInfo = exports.AvatarEquipAffixInfo = exports.AvatarExpeditionInfo = exports.AvatarFetterInfo = exports.FetterData = exports.AvatarSkillInfo = exports.TrialAvatarInfo = exports.TrialAvatarGrantRecord = exports.CreateEntityInfo = exports.CreateGadgetInfo_Chest = exports.CreateGadgetInfo = exports.SceneEntityInfo = exports.EntityAuthorityInfo = exports.EntityClientExtraInfo = exports.EntityEnvironmentInfo = exports.AnimatorParameterValueInfoPair = exports.FightPropPair = exports.PropPair = exports.EntityRendererChangedInfo = exports.SceneEntityAiInfo = exports.ServantInfo = exports.AnimatorParameterValueInfo = exports.SceneGadgetInfo = exports.DeshretObeliskGadgetInfo = exports.NightCrowGadgetInfo = exports.RoguelikeGadgetInfo = exports.CustomGadgetTreeInfo = exports.CustomCommonNodeInfo = exports.FishPoolInfo = exports.ScreenInfo = exports.EchoShellInfo = exports.VehicleInfo = exports.VehicleMember = void 0;
exports.GCGDuelExtra = exports.GCGChallengeData = exports.ActivityDungeonAvatar = exports.NicknameSignatureAuditData = exports.ContentAuditAuxiliaryField = exports.ContentAuditField = exports.ContentAuditData = exports.ContentAuditInfo = exports.HomeBlueprintBatchBriefMuipData = exports.HomeBlueprintBriefMuipData = exports.CustomDungeonBatchBriefMuipData = exports.CustomDungeonBriefMuipData = exports.CustomDungeonSocialMuipData = exports.CustomDungeonAbstractMuipData = exports.CustomDungeonSettingMuipData = exports.PlayerCustomDungeonMuipData = exports.CustomDungeonBattleRecordMuipData = exports.HomeSceneArrangementMuipData = exports.HomeBlockArrangementMuipData = exports.HomeFurnitureArrangementMuipData = exports.MapAreaInfo = exports.HomeMarkPointFurnitureData = exports.HomeMarkPointSuiteData = exports.HomeMarkPointNPCData = exports.RedPointData = exports.ProfilePicture = exports.ExhibitionDisplayInfo = exports.MapMarkTipsInfo = exports.FeatureBlockInfo = exports.PlayTeamEntityInfo = exports.HashedString = exports.ShopConcertProduct = exports.PlayProduct = exports.ShopCardProduct_ResinCard = exports.ShopCardProduct = exports.ShopMcoinProduct = exports.BlockInfo = exports.EntityClientData = exports.MassiveEntityState = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.TrialAvatarGrantRecord.GrantReason
 */
var TrialAvatarGrantRecord_GrantReason;
(function (TrialAvatarGrantRecord_GrantReason) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: GRANT_BY_QUEST = 1;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_QUEST"] = 1] = "GRANT_BY_QUEST";
    /**
     * @generated from protobuf enum value: GRANT_BY_TRIAL_AVATAR_ACTIVITY = 2;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_TRIAL_AVATAR_ACTIVITY"] = 2] = "GRANT_BY_TRIAL_AVATAR_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_DUNGEON_ELEMENT_CHALLENGE = 3;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_DUNGEON_ELEMENT_CHALLENGE"] = 3] = "GRANT_BY_DUNGEON_ELEMENT_CHALLENGE";
    /**
     * @generated from protobuf enum value: GRANT_BY_MIST_TRIAL_ACTIVITY = 4;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_MIST_TRIAL_ACTIVITY"] = 4] = "GRANT_BY_MIST_TRIAL_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_SUMO_ACTIVITY = 5;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_SUMO_ACTIVITY"] = 5] = "GRANT_BY_SUMO_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_POTION_ACTIVITY = 6;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_POTION_ACTIVITY"] = 6] = "GRANT_BY_POTION_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_CRYSTAL_LINK_ACTIVITY = 7;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_CRYSTAL_LINK_ACTIVITY"] = 7] = "GRANT_BY_CRYSTAL_LINK_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_IRODORI_MASTER = 8;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_IRODORI_MASTER"] = 8] = "GRANT_BY_IRODORI_MASTER";
    /**
     * @generated from protobuf enum value: GRANT_BY_GM = 9;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_GM"] = 9] = "GRANT_BY_GM";
    /**
     * @generated from protobuf enum value: GRANT_BY_INSTABLE_SPRAY_ACTIVITY = 10;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_INSTABLE_SPRAY_ACTIVITY"] = 10] = "GRANT_BY_INSTABLE_SPRAY_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_MUQADAS_POTION_ACTIVITY = 11;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_MUQADAS_POTION_ACTIVITY"] = 11] = "GRANT_BY_MUQADAS_POTION_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_VINTAGE_HUNTING = 12;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_VINTAGE_HUNTING"] = 12] = "GRANT_BY_VINTAGE_HUNTING";
    /**
     * @generated from protobuf enum value: GRANT_BY_CHAR_AMUSEMENT = 13;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_CHAR_AMUSEMENT"] = 13] = "GRANT_BY_CHAR_AMUSEMENT";
})(TrialAvatarGrantRecord_GrantReason = exports.TrialAvatarGrantRecord_GrantReason || (exports.TrialAvatarGrantRecord_GrantReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.ENetReason
 */
var ENetReason;
(function (ENetReason) {
    /**
     * @generated from protobuf enum value: ENET_TIMEOUT = 0;
     */
    ENetReason[ENetReason["ENET_TIMEOUT"] = 0] = "ENET_TIMEOUT";
    /**
     * @generated from protobuf enum value: ENET_CLIENT_CLOSE = 1;
     */
    ENetReason[ENetReason["ENET_CLIENT_CLOSE"] = 1] = "ENET_CLIENT_CLOSE";
    /**
     * @generated from protobuf enum value: ENET_CLIENT_REBIND_FAIL = 2;
     */
    ENetReason[ENetReason["ENET_CLIENT_REBIND_FAIL"] = 2] = "ENET_CLIENT_REBIND_FAIL";
    /**
     * @generated from protobuf enum value: ENET_CLIENT_SHUTDOWN = 3;
     */
    ENetReason[ENetReason["ENET_CLIENT_SHUTDOWN"] = 3] = "ENET_CLIENT_SHUTDOWN";
    /**
     * @generated from protobuf enum value: ENET_SERVER_RELOGIN = 4;
     */
    ENetReason[ENetReason["ENET_SERVER_RELOGIN"] = 4] = "ENET_SERVER_RELOGIN";
    /**
     * @generated from protobuf enum value: ENET_SERVER_KICK = 5;
     */
    ENetReason[ENetReason["ENET_SERVER_KICK"] = 5] = "ENET_SERVER_KICK";
    /**
     * @generated from protobuf enum value: ENET_SERVER_SHUTDOWN = 6;
     */
    ENetReason[ENetReason["ENET_SERVER_SHUTDOWN"] = 6] = "ENET_SERVER_SHUTDOWN";
    /**
     * @generated from protobuf enum value: ENET_NOT_FOUND_SESSION = 7;
     */
    ENetReason[ENetReason["ENET_NOT_FOUND_SESSION"] = 7] = "ENET_NOT_FOUND_SESSION";
    /**
     * @generated from protobuf enum value: ENET_LOGIN_UNFINISHED = 8;
     */
    ENetReason[ENetReason["ENET_LOGIN_UNFINISHED"] = 8] = "ENET_LOGIN_UNFINISHED";
    /**
     * @generated from protobuf enum value: ENET_PACKET_FREQ_TOO_HIGH = 9;
     */
    ENetReason[ENetReason["ENET_PACKET_FREQ_TOO_HIGH"] = 9] = "ENET_PACKET_FREQ_TOO_HIGH";
    /**
     * @generated from protobuf enum value: ENET_PING_TIMEOUT = 10;
     */
    ENetReason[ENetReason["ENET_PING_TIMEOUT"] = 10] = "ENET_PING_TIMEOUT";
    /**
     * @generated from protobuf enum value: ENET_TRANFER_FAILED = 11;
     */
    ENetReason[ENetReason["ENET_TRANFER_FAILED"] = 11] = "ENET_TRANFER_FAILED";
    /**
     * @generated from protobuf enum value: ENET_SERVER_KILL_CLIENT = 12;
     */
    ENetReason[ENetReason["ENET_SERVER_KILL_CLIENT"] = 12] = "ENET_SERVER_KILL_CLIENT";
    /**
     * @generated from protobuf enum value: ENET_CHECK_MOVE_SPEED = 13;
     */
    ENetReason[ENetReason["ENET_CHECK_MOVE_SPEED"] = 13] = "ENET_CHECK_MOVE_SPEED";
    /**
     * @generated from protobuf enum value: ENET_ACCOUNT_PASSWORD_CHANGE = 14;
     */
    ENetReason[ENetReason["ENET_ACCOUNT_PASSWORD_CHANGE"] = 14] = "ENET_ACCOUNT_PASSWORD_CHANGE";
    /**
     * @generated from protobuf enum value: ENET_SECURITY_KICK = 15;
     */
    ENetReason[ENetReason["ENET_SECURITY_KICK"] = 15] = "ENET_SECURITY_KICK";
    /**
     * @generated from protobuf enum value: ENET_LUA_SHELL_TIMEOUT = 16;
     */
    ENetReason[ENetReason["ENET_LUA_SHELL_TIMEOUT"] = 16] = "ENET_LUA_SHELL_TIMEOUT";
    /**
     * @generated from protobuf enum value: ENET_SDKFAIL_KICK = 17;
     */
    ENetReason[ENetReason["ENET_SDKFAIL_KICK"] = 17] = "ENET_SDKFAIL_KICK";
    /**
     * @generated from protobuf enum value: ENET_PACKET_COST_TIME = 18;
     */
    ENetReason[ENetReason["ENET_PACKET_COST_TIME"] = 18] = "ENET_PACKET_COST_TIME";
    /**
     * @generated from protobuf enum value: ENET_PACKET_UNION_FREQ = 19;
     */
    ENetReason[ENetReason["ENET_PACKET_UNION_FREQ"] = 19] = "ENET_PACKET_UNION_FREQ";
    /**
     * @generated from protobuf enum value: ENET_WAIT_SND_MAX = 20;
     */
    ENetReason[ENetReason["ENET_WAIT_SND_MAX"] = 20] = "ENET_WAIT_SND_MAX";
    /**
     * @generated from protobuf enum value: ENET_CLIENT_CONNECT_KEY = 1234567890;
     */
    ENetReason[ENetReason["ENET_CLIENT_CONNECT_KEY"] = 1234567890] = "ENET_CLIENT_CONNECT_KEY";
    /**
     * @generated from protobuf enum value: ENET_CLIENT_EDITOR_CONNECT_KEY = 987654321;
     */
    ENetReason[ENetReason["ENET_CLIENT_EDITOR_CONNECT_KEY"] = 987654321] = "ENET_CLIENT_EDITOR_CONNECT_KEY";
})(ENetReason = exports.ENetReason || (exports.ENetReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.AccountType
 */
var AccountType;
(function (AccountType) {
    /**
     * @generated from protobuf enum value: ACCOUNT_MIHOYO_GUEST = 0;
     */
    AccountType[AccountType["ACCOUNT_MIHOYO_GUEST"] = 0] = "ACCOUNT_MIHOYO_GUEST";
    /**
     * @generated from protobuf enum value: ACCOUNT_MIHOYO = 1;
     */
    AccountType[AccountType["ACCOUNT_MIHOYO"] = 1] = "ACCOUNT_MIHOYO";
    /**
     * @generated from protobuf enum value: ACCOUNT_XIAOMI = 11;
     */
    AccountType[AccountType["ACCOUNT_XIAOMI"] = 11] = "ACCOUNT_XIAOMI";
    /**
     * @generated from protobuf enum value: ACCOUNT_COOLPAD = 12;
     */
    AccountType[AccountType["ACCOUNT_COOLPAD"] = 12] = "ACCOUNT_COOLPAD";
    /**
     * @generated from protobuf enum value: ACCOUNT_YYB = 13;
     */
    AccountType[AccountType["ACCOUNT_YYB"] = 13] = "ACCOUNT_YYB";
    /**
     * @generated from protobuf enum value: ACCOUNT_BILI = 14;
     */
    AccountType[AccountType["ACCOUNT_BILI"] = 14] = "ACCOUNT_BILI";
    /**
     * @generated from protobuf enum value: ACCOUNT_HUAWEI = 15;
     */
    AccountType[AccountType["ACCOUNT_HUAWEI"] = 15] = "ACCOUNT_HUAWEI";
    /**
     * @generated from protobuf enum value: ACCOUNT_MEIZU = 16;
     */
    AccountType[AccountType["ACCOUNT_MEIZU"] = 16] = "ACCOUNT_MEIZU";
    /**
     * @generated from protobuf enum value: ACCOUNT_360 = 17;
     */
    AccountType[AccountType["ACCOUNT_360"] = 17] = "ACCOUNT_360";
    /**
     * @generated from protobuf enum value: ACCOUNT_OPPO = 18;
     */
    AccountType[AccountType["ACCOUNT_OPPO"] = 18] = "ACCOUNT_OPPO";
    /**
     * @generated from protobuf enum value: ACCOUNT_VIVO = 19;
     */
    AccountType[AccountType["ACCOUNT_VIVO"] = 19] = "ACCOUNT_VIVO";
    /**
     * @generated from protobuf enum value: ACCOUNT_UC = 20;
     */
    AccountType[AccountType["ACCOUNT_UC"] = 20] = "ACCOUNT_UC";
    /**
     * @generated from protobuf enum value: ACCOUNT_WANDOJIA = 21;
     */
    AccountType[AccountType["ACCOUNT_WANDOJIA"] = 21] = "ACCOUNT_WANDOJIA";
    /**
     * @generated from protobuf enum value: ACCOUNT_LENOVO = 22;
     */
    AccountType[AccountType["ACCOUNT_LENOVO"] = 22] = "ACCOUNT_LENOVO";
    /**
     * @generated from protobuf enum value: ACCOUNT_JINLI = 23;
     */
    AccountType[AccountType["ACCOUNT_JINLI"] = 23] = "ACCOUNT_JINLI";
    /**
     * @generated from protobuf enum value: ACCOUNT_BAIDU = 25;
     */
    AccountType[AccountType["ACCOUNT_BAIDU"] = 25] = "ACCOUNT_BAIDU";
    /**
     * @generated from protobuf enum value: ACCOUNT_DANGLE = 26;
     */
    AccountType[AccountType["ACCOUNT_DANGLE"] = 26] = "ACCOUNT_DANGLE";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChannelIdType
 */
var ChannelIdType;
(function (ChannelIdType) {
    /**
     * @generated from protobuf enum value: CHANNEL_ID_NONE = 0;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_NONE"] = 0] = "CHANNEL_ID_NONE";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_MIHOYO = 1;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_MIHOYO"] = 1] = "CHANNEL_ID_MIHOYO";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_XIAOMI = 11;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_XIAOMI"] = 11] = "CHANNEL_ID_XIAOMI";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_COOLPAD = 12;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_COOLPAD"] = 12] = "CHANNEL_ID_COOLPAD";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_YYB = 13;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_YYB"] = 13] = "CHANNEL_ID_YYB";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_BILI = 14;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_BILI"] = 14] = "CHANNEL_ID_BILI";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_HUAWEI = 15;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_HUAWEI"] = 15] = "CHANNEL_ID_HUAWEI";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_MEIZU = 16;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_MEIZU"] = 16] = "CHANNEL_ID_MEIZU";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_360 = 17;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_360"] = 17] = "CHANNEL_ID_360";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_OPPO = 18;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_OPPO"] = 18] = "CHANNEL_ID_OPPO";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_VIVO = 19;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_VIVO"] = 19] = "CHANNEL_ID_VIVO";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_UC = 20;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_UC"] = 20] = "CHANNEL_ID_UC";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_LENOVO = 22;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_LENOVO"] = 22] = "CHANNEL_ID_LENOVO";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_JINLI = 23;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_JINLI"] = 23] = "CHANNEL_ID_JINLI";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_BAIDU = 25;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_BAIDU"] = 25] = "CHANNEL_ID_BAIDU";
    /**
     * @generated from protobuf enum value: CHANNEL_ID_DANGLE = 26;
     */
    ChannelIdType[ChannelIdType["CHANNEL_ID_DANGLE"] = 26] = "CHANNEL_ID_DANGLE";
})(ChannelIdType = exports.ChannelIdType || (exports.ChannelIdType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServiceType
 */
var ServiceType;
(function (ServiceType) {
    /**
     * @generated from protobuf enum value: SERVICE_NONE = 0;
     */
    ServiceType[ServiceType["SERVICE_NONE"] = 0] = "SERVICE_NONE";
    /**
     * @generated from protobuf enum value: SERVICE_CLIENT = 1;
     */
    ServiceType[ServiceType["SERVICE_CLIENT"] = 1] = "SERVICE_CLIENT";
    /**
     * @generated from protobuf enum value: SERVICE_GATE = 2;
     */
    ServiceType[ServiceType["SERVICE_GATE"] = 2] = "SERVICE_GATE";
    /**
     * @generated from protobuf enum value: SERVICE_GAME = 3;
     */
    ServiceType[ServiceType["SERVICE_GAME"] = 3] = "SERVICE_GAME";
    /**
     * @generated from protobuf enum value: SERVICE_NODE = 4;
     */
    ServiceType[ServiceType["SERVICE_NODE"] = 4] = "SERVICE_NODE";
    /**
     * @generated from protobuf enum value: SERVICE_DB = 5;
     */
    ServiceType[ServiceType["SERVICE_DB"] = 5] = "SERVICE_DB";
    /**
     * @generated from protobuf enum value: SERVICE_SNS = 6;
     */
    ServiceType[ServiceType["SERVICE_SNS"] = 6] = "SERVICE_SNS";
    /**
     * @generated from protobuf enum value: SERVICE_DISPATCH = 7;
     */
    ServiceType[ServiceType["SERVICE_DISPATCH"] = 7] = "SERVICE_DISPATCH";
    /**
     * @generated from protobuf enum value: SERVICE_MUIP = 8;
     */
    ServiceType[ServiceType["SERVICE_MUIP"] = 8] = "SERVICE_MUIP";
    /**
     * @generated from protobuf enum value: SERVICE_OFFLINE_MSG = 9;
     */
    ServiceType[ServiceType["SERVICE_OFFLINE_MSG"] = 9] = "SERVICE_OFFLINE_MSG";
    /**
     * @generated from protobuf enum value: SERVICE_MAIL = 10;
     */
    ServiceType[ServiceType["SERVICE_MAIL"] = 10] = "SERVICE_MAIL";
    /**
     * @generated from protobuf enum value: SERVICE_MP = 11;
     */
    ServiceType[ServiceType["SERVICE_MP"] = 11] = "SERVICE_MP";
    /**
     * @generated from protobuf enum value: SERVICE_HTTPPROXY = 12;
     */
    ServiceType[ServiceType["SERVICE_HTTPPROXY"] = 12] = "SERVICE_HTTPPROXY";
    /**
     * @generated from protobuf enum value: SERVICE_ACTIVITY = 13;
     */
    ServiceType[ServiceType["SERVICE_ACTIVITY"] = 13] = "SERVICE_ACTIVITY";
    /**
     * @generated from protobuf enum value: SERVICE_PATHFINDING = 14;
     */
    ServiceType[ServiceType["SERVICE_PATHFINDING"] = 14] = "SERVICE_PATHFINDING";
    /**
     * @generated from protobuf enum value: SERVICE_SOCIAL = 15;
     */
    ServiceType[ServiceType["SERVICE_SOCIAL"] = 15] = "SERVICE_SOCIAL";
    /**
     * @generated from protobuf enum value: SERVICE_OA = 16;
     */
    ServiceType[ServiceType["SERVICE_OA"] = 16] = "SERVICE_OA";
    /**
     * @generated from protobuf enum value: SERVICE_MATCH = 17;
     */
    ServiceType[ServiceType["SERVICE_MATCH"] = 17] = "SERVICE_MATCH";
    /**
     * @generated from protobuf enum value: SERVICE_OFFLINE_OP = 18;
     */
    ServiceType[ServiceType["SERVICE_OFFLINE_OP"] = 18] = "SERVICE_OFFLINE_OP";
    /**
     * @generated from protobuf enum value: SERVICE_TOTHEMOON = 19;
     */
    ServiceType[ServiceType["SERVICE_TOTHEMOON"] = 19] = "SERVICE_TOTHEMOON";
    /**
     * @generated from protobuf enum value: SERVICE_GCG = 20;
     */
    ServiceType[ServiceType["SERVICE_GCG"] = 20] = "SERVICE_GCG";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientType
 */
var ClientType;
(function (ClientType) {
    /**
     * @generated from protobuf enum value: CLIENT_PRODUCT = 0;
     */
    ClientType[ClientType["CLIENT_PRODUCT"] = 0] = "CLIENT_PRODUCT";
    /**
     * @generated from protobuf enum value: CLIENT_DEV = 1;
     */
    ClientType[ClientType["CLIENT_DEV"] = 1] = "CLIENT_DEV";
})(ClientType = exports.ClientType || (exports.ClientType = {}));
/**
 * @generated from protobuf enum com.midnights.game.RegionType
 */
var RegionType;
(function (RegionType) {
    /**
     * @generated from protobuf enum value: REGION_PRODUCT = 0;
     */
    RegionType[RegionType["REGION_PRODUCT"] = 0] = "REGION_PRODUCT";
    /**
     * @generated from protobuf enum value: REGION_EXAM = 1;
     */
    RegionType[RegionType["REGION_EXAM"] = 1] = "REGION_EXAM";
    /**
     * @generated from protobuf enum value: REGION_DEV_PUB = 2;
     */
    RegionType[RegionType["REGION_DEV_PUB"] = 2] = "REGION_DEV_PUB";
    /**
     * @generated from protobuf enum value: REGION_DEV_PRI = 3;
     */
    RegionType[RegionType["REGION_DEV_PRI"] = 3] = "REGION_DEV_PRI";
})(RegionType = exports.RegionType || (exports.RegionType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ActionReasonType
 */
var ActionReasonType;
(function (ActionReasonType) {
    /**
     * @generated from protobuf enum value: ACTION_REASON_NONE = 0;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_NONE"] = 0] = "ACTION_REASON_NONE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_QUEST_ITEM = 1;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_QUEST_ITEM"] = 1] = "ACTION_REASON_QUEST_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_QUEST_REWARD = 2;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_QUEST_REWARD"] = 2] = "ACTION_REASON_QUEST_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TRIFLE = 3;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TRIFLE"] = 3] = "ACTION_REASON_TRIFLE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SHOP = 4;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SHOP"] = 4] = "ACTION_REASON_SHOP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PLAYER_UPGRADE_REWARD = 5;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PLAYER_UPGRADE_REWARD"] = 5] = "ACTION_REASON_PLAYER_UPGRADE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ADD_AVATAR = 6;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ADD_AVATAR"] = 6] = "ACTION_REASON_ADD_AVATAR";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GADGET_ENV_ANIMAL = 7;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GADGET_ENV_ANIMAL"] = 7] = "ACTION_REASON_GADGET_ENV_ANIMAL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MONSTER_ENV_ANIMAL = 8;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MONSTER_ENV_ANIMAL"] = 8] = "ACTION_REASON_MONSTER_ENV_ANIMAL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_COMPOUND = 9;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_COMPOUND"] = 9] = "ACTION_REASON_COMPOUND";
    /**
     * @generated from protobuf enum value: ACTION_REASON_COOK = 10;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_COOK"] = 10] = "ACTION_REASON_COOK";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GATHER = 11;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GATHER"] = 11] = "ACTION_REASON_GATHER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MAIL_ATTACHMENT = 12;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MAIL_ATTACHMENT"] = 12] = "ACTION_REASON_MAIL_ATTACHMENT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CITY_LEVELUP_RETURN = 15;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CITY_LEVELUP_RETURN"] = 15] = "ACTION_REASON_CITY_LEVELUP_RETURN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CITY_LEVELUP_REWARD = 17;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CITY_LEVELUP_REWARD"] = 17] = "ACTION_REASON_CITY_LEVELUP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_AREA_EXPLORE_REWARD = 18;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_AREA_EXPLORE_REWARD"] = 18] = "ACTION_REASON_AREA_EXPLORE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_UNLOCK_POINT_REWARD = 19;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_UNLOCK_POINT_REWARD"] = 19] = "ACTION_REASON_UNLOCK_POINT_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DUNGEON_FIRST_PASS = 20;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DUNGEON_FIRST_PASS"] = 20] = "ACTION_REASON_DUNGEON_FIRST_PASS";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DUNGEON_PASS = 21;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DUNGEON_PASS"] = 21] = "ACTION_REASON_DUNGEON_PASS";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CHANGE_ELEM_TYPE = 23;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CHANGE_ELEM_TYPE"] = 23] = "ACTION_REASON_CHANGE_ELEM_TYPE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FETTER_OPEN = 25;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FETTER_OPEN"] = 25] = "ACTION_REASON_FETTER_OPEN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DAILY_TASK_SCORE = 26;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DAILY_TASK_SCORE"] = 26] = "ACTION_REASON_DAILY_TASK_SCORE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DAILY_TASK_HOST = 27;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DAILY_TASK_HOST"] = 27] = "ACTION_REASON_DAILY_TASK_HOST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RAND_TASK_HOST = 28;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RAND_TASK_HOST"] = 28] = "ACTION_REASON_RAND_TASK_HOST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_EXPEDITION = 29;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_EXPEDITION"] = 29] = "ACTION_REASON_EXPEDITION";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GACHA = 30;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GACHA"] = 30] = "ACTION_REASON_GACHA";
    /**
     * @generated from protobuf enum value: ACTION_REASON_COMBINE = 31;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_COMBINE"] = 31] = "ACTION_REASON_COMBINE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RAND_TASK_GUEST = 32;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RAND_TASK_GUEST"] = 32] = "ACTION_REASON_RAND_TASK_GUEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DAILY_TASK_GUEST = 33;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DAILY_TASK_GUEST"] = 33] = "ACTION_REASON_DAILY_TASK_GUEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FORGE_OUTPUT = 34;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FORGE_OUTPUT"] = 34] = "ACTION_REASON_FORGE_OUTPUT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FORGE_RETURN = 35;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FORGE_RETURN"] = 35] = "ACTION_REASON_FORGE_RETURN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_INIT_AVATAR = 36;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_INIT_AVATAR"] = 36] = "ACTION_REASON_INIT_AVATAR";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MONSTER_DIE = 37;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MONSTER_DIE"] = 37] = "ACTION_REASON_MONSTER_DIE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GM = 38;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GM"] = 38] = "ACTION_REASON_GM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_OPEN_CHEST = 39;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_OPEN_CHEST"] = 39] = "ACTION_REASON_OPEN_CHEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GADGET_DIE = 40;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GADGET_DIE"] = 40] = "ACTION_REASON_GADGET_DIE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MONSTER_CHANGE_HP = 41;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MONSTER_CHANGE_HP"] = 41] = "ACTION_REASON_MONSTER_CHANGE_HP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SUBFIELD_DROP = 42;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SUBFIELD_DROP"] = 42] = "ACTION_REASON_SUBFIELD_DROP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PUSH_TIPS_REWARD = 43;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PUSH_TIPS_REWARD"] = 43] = "ACTION_REASON_PUSH_TIPS_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_MONSTER_DROP = 44;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_MONSTER_DROP"] = 44] = "ACTION_REASON_ACTIVITY_MONSTER_DROP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_GATHER = 45;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_GATHER"] = 45] = "ACTION_REASON_ACTIVITY_GATHER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_SUBFIELD_DROP = 46;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_SUBFIELD_DROP"] = 46] = "ACTION_REASON_ACTIVITY_SUBFIELD_DROP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TOWER_SCHEDULE_REWARD = 47;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TOWER_SCHEDULE_REWARD"] = 47] = "ACTION_REASON_TOWER_SCHEDULE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TOWER_FLOOR_STAR_REWARD = 48;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TOWER_FLOOR_STAR_REWARD"] = 48] = "ACTION_REASON_TOWER_FLOOR_STAR_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TOWER_FIRST_PASS_REWARD = 49;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TOWER_FIRST_PASS_REWARD"] = 49] = "ACTION_REASON_TOWER_FIRST_PASS_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TOWER_DAILY_REWARD = 50;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TOWER_DAILY_REWARD"] = 50] = "ACTION_REASON_TOWER_DAILY_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HIT_CLIENT_TRIVIAL_ENTITY = 51;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HIT_CLIENT_TRIVIAL_ENTITY"] = 51] = "ACTION_REASON_HIT_CLIENT_TRIVIAL_ENTITY";
    /**
     * @generated from protobuf enum value: ACTION_REASON_OPEN_WORLD_BOSS_CHEST = 52;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_OPEN_WORLD_BOSS_CHEST"] = 52] = "ACTION_REASON_OPEN_WORLD_BOSS_CHEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MATERIAL_DELETE_RETURN = 53;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MATERIAL_DELETE_RETURN"] = 53] = "ACTION_REASON_MATERIAL_DELETE_RETURN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SIGN_IN_REWARD = 54;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SIGN_IN_REWARD"] = 54] = "ACTION_REASON_SIGN_IN_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_OPEN_BLOSSOM_CHEST = 55;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_OPEN_BLOSSOM_CHEST"] = 55] = "ACTION_REASON_OPEN_BLOSSOM_CHEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE = 56;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE"] = 56] = "ACTION_REASON_RECHARGE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BONUS_ACTIVITY_REWARD = 57;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BONUS_ACTIVITY_REWARD"] = 57] = "ACTION_REASON_BONUS_ACTIVITY_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TOWER_COMMEMORATIVE_REWARD = 58;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TOWER_COMMEMORATIVE_REWARD"] = 58] = "ACTION_REASON_TOWER_COMMEMORATIVE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TOWER_SKIP_FLOOR_REWARD = 59;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TOWER_SKIP_FLOOR_REWARD"] = 59] = "ACTION_REASON_TOWER_SKIP_FLOOR_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_BONUS = 60;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_BONUS"] = 60] = "ACTION_REASON_RECHARGE_BONUS";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_CARD = 61;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_CARD"] = 61] = "ACTION_REASON_RECHARGE_CARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_CARD_DAILY = 62;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_CARD_DAILY"] = 62] = "ACTION_REASON_RECHARGE_CARD_DAILY";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_CARD_REPLACE = 63;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_CARD_REPLACE"] = 63] = "ACTION_REASON_RECHARGE_CARD_REPLACE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_CARD_REPLACE_FREE = 64;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_CARD_REPLACE_FREE"] = 64] = "ACTION_REASON_RECHARGE_CARD_REPLACE_FREE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_PLAY_REPLACE = 65;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_PLAY_REPLACE"] = 65] = "ACTION_REASON_RECHARGE_PLAY_REPLACE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MP_PLAY_TAKE_REWARD = 66;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MP_PLAY_TAKE_REWARD"] = 66] = "ACTION_REASON_MP_PLAY_TAKE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_WATCHER = 67;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_WATCHER"] = 67] = "ACTION_REASON_ACTIVITY_WATCHER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SALESMAN_DELIVER_ITEM = 68;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SALESMAN_DELIVER_ITEM"] = 68] = "ACTION_REASON_SALESMAN_DELIVER_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SALESMAN_REWARD = 69;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SALESMAN_REWARD"] = 69] = "ACTION_REASON_SALESMAN_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_REBATE = 70;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_REBATE"] = 70] = "ACTION_REASON_REBATE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MCOIN_EXCHANGE_HCOIN = 71;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MCOIN_EXCHANGE_HCOIN"] = 71] = "ACTION_REASON_MCOIN_EXCHANGE_HCOIN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DAILY_TASK_EXCHANGE_LEGENDARY_KEY = 72;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DAILY_TASK_EXCHANGE_LEGENDARY_KEY"] = 72] = "ACTION_REASON_DAILY_TASK_EXCHANGE_LEGENDARY_KEY";
    /**
     * @generated from protobuf enum value: ACTION_REASON_UNLOCK_PERSON_LINE = 73;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_UNLOCK_PERSON_LINE"] = 73] = "ACTION_REASON_UNLOCK_PERSON_LINE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FETTER_LEVEL_REWARD = 74;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FETTER_LEVEL_REWARD"] = 74] = "ACTION_REASON_FETTER_LEVEL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BUY_RESIN = 75;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BUY_RESIN"] = 75] = "ACTION_REASON_BUY_RESIN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_PACKAGE = 76;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_PACKAGE"] = 76] = "ACTION_REASON_RECHARGE_PACKAGE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DELIVERY_DAILY_REWARD = 77;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DELIVERY_DAILY_REWARD"] = 77] = "ACTION_REASON_DELIVERY_DAILY_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CITY_REPUTATION_LEVEL = 78;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CITY_REPUTATION_LEVEL"] = 78] = "ACTION_REASON_CITY_REPUTATION_LEVEL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CITY_REPUTATION_QUEST = 79;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CITY_REPUTATION_QUEST"] = 79] = "ACTION_REASON_CITY_REPUTATION_QUEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CITY_REPUTATION_REQUEST = 80;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CITY_REPUTATION_REQUEST"] = 80] = "ACTION_REASON_CITY_REPUTATION_REQUEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CITY_REPUTATION_EXPLORE = 81;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CITY_REPUTATION_EXPLORE"] = 81] = "ACTION_REASON_CITY_REPUTATION_EXPLORE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_OFFERGING_LEVEL = 82;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_OFFERGING_LEVEL"] = 82] = "ACTION_REASON_OFFERGING_LEVEL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ROUTINE_HOST = 83;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ROUTINE_HOST"] = 83] = "ACTION_REASON_ROUTINE_HOST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ROUTINE_GUEST = 84;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ROUTINE_GUEST"] = 84] = "ACTION_REASON_ROUTINE_GUEST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TREASURE_MAP_SPOT_TOKEN = 89;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TREASURE_MAP_SPOT_TOKEN"] = 89] = "ACTION_REASON_TREASURE_MAP_SPOT_TOKEN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TREASURE_MAP_BONUS_LEVEL_REWARD = 90;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TREASURE_MAP_BONUS_LEVEL_REWARD"] = 90] = "ACTION_REASON_TREASURE_MAP_BONUS_LEVEL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TREASURE_MAP_MP_REWARD = 91;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TREASURE_MAP_MP_REWARD"] = 91] = "ACTION_REASON_TREASURE_MAP_MP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CONVERT = 92;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CONVERT"] = 92] = "ACTION_REASON_CONVERT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_OVERFLOW_TRANSFORM = 93;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_OVERFLOW_TRANSFORM"] = 93] = "ACTION_REASON_OVERFLOW_TRANSFORM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_AVATAR_SELECTION_REWARD = 96;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_AVATAR_SELECTION_REWARD"] = 96] = "ACTION_REASON_ACTIVITY_AVATAR_SELECTION_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_WATCHER_BATCH = 97;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_WATCHER_BATCH"] = 97] = "ACTION_REASON_ACTIVITY_WATCHER_BATCH";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HIT_TREE_DROP = 98;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HIT_TREE_DROP"] = 98] = "ACTION_REASON_HIT_TREE_DROP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GET_HOME_LEVELUP_REWARD = 99;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GET_HOME_LEVELUP_REWARD"] = 99] = "ACTION_REASON_GET_HOME_LEVELUP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_DEFAULT_FURNITURE = 100;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_DEFAULT_FURNITURE"] = 100] = "ACTION_REASON_HOME_DEFAULT_FURNITURE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_COND = 101;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_COND"] = 101] = "ACTION_REASON_ACTIVITY_COND";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BATTLE_PASS_NOTIFY = 102;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BATTLE_PASS_NOTIFY"] = 102] = "ACTION_REASON_BATTLE_PASS_NOTIFY";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RELIQUARY_DECOMPOSE = 103;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RELIQUARY_DECOMPOSE"] = 103] = "ACTION_REASON_RELIQUARY_DECOMPOSE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_GOOGLE_GIFT_GARD = 104;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_GOOGLE_GIFT_GARD"] = 104] = "ACTION_REASON_RECHARGE_GOOGLE_GIFT_GARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_CONCERT_PRODUCT = 105;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_CONCERT_PRODUCT"] = 105] = "ACTION_REASON_RECHARGE_CONCERT_PRODUCT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_CONCERT_PRODUCT_REPLACE = 106;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_CONCERT_PRODUCT_REPLACE"] = 106] = "ACTION_REASON_RECHARGE_CONCERT_PRODUCT_REPLACE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SEND_CONCERT_PRODUCT_BY_MUIP = 107;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SEND_CONCERT_PRODUCT_BY_MUIP"] = 107] = "ACTION_REASON_SEND_CONCERT_PRODUCT_BY_MUIP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_APPLE_GIFT_GARD = 108;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_APPLE_GIFT_GARD"] = 108] = "ACTION_REASON_RECHARGE_APPLE_GIFT_GARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RECHARGE_PSN_COMPENSATION_PRODUCT = 109;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RECHARGE_PSN_COMPENSATION_PRODUCT"] = 109] = "ACTION_REASON_RECHARGE_PSN_COMPENSATION_PRODUCT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_COMPOUND_BOOST = 110;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_COMPOUND_BOOST"] = 110] = "ACTION_REASON_COMPOUND_BOOST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WOOD_EXCHANGE = 111;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WOOD_EXCHANGE"] = 111] = "ACTION_REASON_WOOD_EXCHANGE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PLAYER_USE_ITEM = 1001;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PLAYER_USE_ITEM"] = 1001] = "ACTION_REASON_PLAYER_USE_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DROP_ITEM = 1002;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DROP_ITEM"] = 1002] = "ACTION_REASON_DROP_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WEAPON_UPGRADE = 1011;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WEAPON_UPGRADE"] = 1011] = "ACTION_REASON_WEAPON_UPGRADE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WEAPON_PROMOTE = 1012;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WEAPON_PROMOTE"] = 1012] = "ACTION_REASON_WEAPON_PROMOTE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WEAPON_AWAKEN = 1013;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WEAPON_AWAKEN"] = 1013] = "ACTION_REASON_WEAPON_AWAKEN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_RELIC_UPGRADE = 1014;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_RELIC_UPGRADE"] = 1014] = "ACTION_REASON_RELIC_UPGRADE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ABILITY = 1015;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ABILITY"] = 1015] = "ACTION_REASON_ABILITY";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DUNGEON_STATUE_DROP = 1016;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DUNGEON_STATUE_DROP"] = 1016] = "ACTION_REASON_DUNGEON_STATUE_DROP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_OFFLINE_MSG = 1017;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_OFFLINE_MSG"] = 1017] = "ACTION_REASON_OFFLINE_MSG";
    /**
     * @generated from protobuf enum value: ACTION_REASON_AVATAR_UPGRADE = 1018;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_AVATAR_UPGRADE"] = 1018] = "ACTION_REASON_AVATAR_UPGRADE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_AVATAR_PROMOTE = 1019;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_AVATAR_PROMOTE"] = 1019] = "ACTION_REASON_AVATAR_PROMOTE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_QUEST_ACTION = 1021;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_QUEST_ACTION"] = 1021] = "ACTION_REASON_QUEST_ACTION";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CITY_LEVELUP = 1022;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CITY_LEVELUP"] = 1022] = "ACTION_REASON_CITY_LEVELUP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_UPGRADE_SKILL = 1024;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_UPGRADE_SKILL"] = 1024] = "ACTION_REASON_UPGRADE_SKILL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_UNLOCK_TALENT = 1025;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_UNLOCK_TALENT"] = 1025] = "ACTION_REASON_UNLOCK_TALENT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_UPGRADE_PROUD_SKILL = 1026;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_UPGRADE_PROUD_SKILL"] = 1026] = "ACTION_REASON_UPGRADE_PROUD_SKILL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PLAYER_LEVEL_LIMIT_UP = 1027;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PLAYER_LEVEL_LIMIT_UP"] = 1027] = "ACTION_REASON_PLAYER_LEVEL_LIMIT_UP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DUNGEON_DAILY = 1028;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DUNGEON_DAILY"] = 1028] = "ACTION_REASON_DUNGEON_DAILY";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ITEM_GIVING = 1030;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ITEM_GIVING"] = 1030] = "ACTION_REASON_ITEM_GIVING";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FORGE_COST = 1031;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FORGE_COST"] = 1031] = "ACTION_REASON_FORGE_COST";
    /**
     * @generated from protobuf enum value: ACTION_REASON_INVESTIGATION_REWARD = 1032;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_INVESTIGATION_REWARD"] = 1032] = "ACTION_REASON_INVESTIGATION_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_INVESTIGATION_TARGET_REWARD = 1033;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_INVESTIGATION_TARGET_REWARD"] = 1033] = "ACTION_REASON_INVESTIGATION_TARGET_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GADGET_INTERACT = 1034;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GADGET_INTERACT"] = 1034] = "ACTION_REASON_GADGET_INTERACT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SEA_LAMP_CI_MATERIAL = 1036;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SEA_LAMP_CI_MATERIAL"] = 1036] = "ACTION_REASON_SEA_LAMP_CI_MATERIAL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SEA_LAMP_CONTRIBUTION_REWARD = 1037;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SEA_LAMP_CONTRIBUTION_REWARD"] = 1037] = "ACTION_REASON_SEA_LAMP_CONTRIBUTION_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SEA_LAMP_PHASE_REWARD = 1038;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SEA_LAMP_PHASE_REWARD"] = 1038] = "ACTION_REASON_SEA_LAMP_PHASE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SEA_LAMP_FLY_LAMP = 1039;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SEA_LAMP_FLY_LAMP"] = 1039] = "ACTION_REASON_SEA_LAMP_FLY_LAMP";
    /**
     * @generated from protobuf enum value: ACTION_REASON_AUTO_RECOVER = 1040;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_AUTO_RECOVER"] = 1040] = "ACTION_REASON_AUTO_RECOVER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_EXPIRE_ITEM = 1041;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_EXPIRE_ITEM"] = 1041] = "ACTION_REASON_ACTIVITY_EXPIRE_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SUB_COIN_NEGATIVE = 1042;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SUB_COIN_NEGATIVE"] = 1042] = "ACTION_REASON_SUB_COIN_NEGATIVE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BARGAIN_DEDUCT = 1043;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BARGAIN_DEDUCT"] = 1043] = "ACTION_REASON_BARGAIN_DEDUCT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BATTLE_PASS_PAID_REWARD = 1044;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BATTLE_PASS_PAID_REWARD"] = 1044] = "ACTION_REASON_BATTLE_PASS_PAID_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BATTLE_PASS_LEVEL_REWARD = 1045;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BATTLE_PASS_LEVEL_REWARD"] = 1045] = "ACTION_REASON_BATTLE_PASS_LEVEL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TRIAL_AVATAR_ACTIVITY_FIRST_PASS_REWARD = 1046;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TRIAL_AVATAR_ACTIVITY_FIRST_PASS_REWARD"] = 1046] = "ACTION_REASON_TRIAL_AVATAR_ACTIVITY_FIRST_PASS_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BUY_BATTLE_PASS_LEVEL = 1047;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BUY_BATTLE_PASS_LEVEL"] = 1047] = "ACTION_REASON_BUY_BATTLE_PASS_LEVEL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GRANT_BIRTHDAY_BENEFIT = 1048;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GRANT_BIRTHDAY_BENEFIT"] = 1048] = "ACTION_REASON_GRANT_BIRTHDAY_BENEFIT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACHIEVEMENT_REWARD = 1049;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACHIEVEMENT_REWARD"] = 1049] = "ACTION_REASON_ACHIEVEMENT_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACHIEVEMENT_GOAL_REWARD = 1050;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACHIEVEMENT_GOAL_REWARD"] = 1050] = "ACTION_REASON_ACHIEVEMENT_GOAL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FIRST_SHARE_TO_SOCIAL_NETWORK = 1051;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FIRST_SHARE_TO_SOCIAL_NETWORK"] = 1051] = "ACTION_REASON_FIRST_SHARE_TO_SOCIAL_NETWORK";
    /**
     * @generated from protobuf enum value: ACTION_REASON_DESTROY_MATERIAL = 1052;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_DESTROY_MATERIAL"] = 1052] = "ACTION_REASON_DESTROY_MATERIAL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CODEX_LEVELUP_REWARD = 1053;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CODEX_LEVELUP_REWARD"] = 1053] = "ACTION_REASON_CODEX_LEVELUP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HUNTING_OFFER_REWARD = 1054;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HUNTING_OFFER_REWARD"] = 1054] = "ACTION_REASON_HUNTING_OFFER_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_USE_WIDGET_ANCHOR_POINT = 1055;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_USE_WIDGET_ANCHOR_POINT"] = 1055] = "ACTION_REASON_USE_WIDGET_ANCHOR_POINT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_USE_WIDGET_BONFIRE = 1056;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_USE_WIDGET_BONFIRE"] = 1056] = "ACTION_REASON_USE_WIDGET_BONFIRE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_UNGRADE_WEAPON_RETURN_MATERIAL = 1057;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_UNGRADE_WEAPON_RETURN_MATERIAL"] = 1057] = "ACTION_REASON_UNGRADE_WEAPON_RETURN_MATERIAL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_USE_WIDGET_ONEOFF_GATHER_POINT_DETECTOR = 1058;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_USE_WIDGET_ONEOFF_GATHER_POINT_DETECTOR"] = 1058] = "ACTION_REASON_USE_WIDGET_ONEOFF_GATHER_POINT_DETECTOR";
    /**
     * @generated from protobuf enum value: ACTION_REASON_USE_WIDGET_CLIENT_COLLECTOR = 1059;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_USE_WIDGET_CLIENT_COLLECTOR"] = 1059] = "ACTION_REASON_USE_WIDGET_CLIENT_COLLECTOR";
    /**
     * @generated from protobuf enum value: ACTION_REASON_USE_WIDGET_CLIENT_DETECTOR = 1060;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_USE_WIDGET_CLIENT_DETECTOR"] = 1060] = "ACTION_REASON_USE_WIDGET_CLIENT_DETECTOR";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TAKE_GENERAL_REWARD = 1061;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TAKE_GENERAL_REWARD"] = 1061] = "ACTION_REASON_TAKE_GENERAL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ASTER_TAKE_SPECIAL_REWARD = 1062;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ASTER_TAKE_SPECIAL_REWARD"] = 1062] = "ACTION_REASON_ASTER_TAKE_SPECIAL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_REMOVE_CODEX_BOOK = 1063;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_REMOVE_CODEX_BOOK"] = 1063] = "ACTION_REASON_REMOVE_CODEX_BOOK";
    /**
     * @generated from protobuf enum value: ACTION_REASON_OFFERING_ITEM = 1064;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_OFFERING_ITEM"] = 1064] = "ACTION_REASON_OFFERING_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_USE_WIDGET_GADGET_BUILDER = 1065;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_USE_WIDGET_GADGET_BUILDER"] = 1065] = "ACTION_REASON_USE_WIDGET_GADGET_BUILDER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_EFFIGY_FIRST_PASS_REWARD = 1066;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_EFFIGY_FIRST_PASS_REWARD"] = 1066] = "ACTION_REASON_EFFIGY_FIRST_PASS_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_EFFIGY_REWARD = 1067;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_EFFIGY_REWARD"] = 1067] = "ACTION_REASON_EFFIGY_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_REUNION_FIRST_GIFT_REWARD = 1068;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_REUNION_FIRST_GIFT_REWARD"] = 1068] = "ACTION_REASON_REUNION_FIRST_GIFT_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_REUNION_SIGN_IN_REWARD = 1069;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_REUNION_SIGN_IN_REWARD"] = 1069] = "ACTION_REASON_REUNION_SIGN_IN_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_REUNION_WATCHER_REWARD = 1070;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_REUNION_WATCHER_REWARD"] = 1070] = "ACTION_REASON_REUNION_WATCHER_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SALESMAN_MP_REWARD = 1071;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SALESMAN_MP_REWARD"] = 1071] = "ACTION_REASON_SALESMAN_MP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASION_AVATAR_PROMOTE_REWARD = 1072;
     */
    ActionReasonType[ActionReasonType["ACTION_REASION_AVATAR_PROMOTE_REWARD"] = 1072] = "ACTION_REASION_AVATAR_PROMOTE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BLESSING_REDEEM_REWARD = 1073;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BLESSING_REDEEM_REWARD"] = 1073] = "ACTION_REASON_BLESSING_REDEEM_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_MIRACLE_RING_REWARD = 1074;
     */
    ActionReasonType[ActionReasonType["ACTION_MIRACLE_RING_REWARD"] = 1074] = "ACTION_MIRACLE_RING_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_EXPEDITION_REWARD = 1075;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_EXPEDITION_REWARD"] = 1075] = "ACTION_REASON_EXPEDITION_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TREASURE_MAP_REMOVE_DETECTOR = 1076;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TREASURE_MAP_REMOVE_DETECTOR"] = 1076] = "ACTION_REASON_TREASURE_MAP_REMOVE_DETECTOR";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MECHANICUS_DUNGEON_TICKET = 1077;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MECHANICUS_DUNGEON_TICKET"] = 1077] = "ACTION_REASON_MECHANICUS_DUNGEON_TICKET";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MECHANICUS_LEVELUP_GEAR = 1078;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MECHANICUS_LEVELUP_GEAR"] = 1078] = "ACTION_REASON_MECHANICUS_LEVELUP_GEAR";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MECHANICUS_BATTLE_SETTLE = 1079;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MECHANICUS_BATTLE_SETTLE"] = 1079] = "ACTION_REASON_MECHANICUS_BATTLE_SETTLE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_REGION_SEARCH_REWARD = 1080;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_REGION_SEARCH_REWARD"] = 1080] = "ACTION_REASON_REGION_SEARCH_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_UNLOCK_COOP_CHAPTER = 1081;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_UNLOCK_COOP_CHAPTER"] = 1081] = "ACTION_REASON_UNLOCK_COOP_CHAPTER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TAKE_COOP_REWARD = 1082;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TAKE_COOP_REWARD"] = 1082] = "ACTION_REASON_TAKE_COOP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FLEUR_FAIR_DUNGEON_REWARD = 1083;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FLEUR_FAIR_DUNGEON_REWARD"] = 1083] = "ACTION_REASON_FLEUR_FAIR_DUNGEON_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ACTIVITY_SCORE = 1084;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ACTIVITY_SCORE"] = 1084] = "ACTION_REASON_ACTIVITY_SCORE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CHANNELLER_SLAB_ONEOFF_DUNGEON_REWARD = 1085;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CHANNELLER_SLAB_ONEOFF_DUNGEON_REWARD"] = 1085] = "ACTION_REASON_CHANNELLER_SLAB_ONEOFF_DUNGEON_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FURNITURE_MAKE_START = 1086;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FURNITURE_MAKE_START"] = 1086] = "ACTION_REASON_FURNITURE_MAKE_START";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FURNITURE_MAKE_TAKE = 1087;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FURNITURE_MAKE_TAKE"] = 1087] = "ACTION_REASON_FURNITURE_MAKE_TAKE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FURNITURE_MAKE_CANCEL = 1088;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FURNITURE_MAKE_CANCEL"] = 1088] = "ACTION_REASON_FURNITURE_MAKE_CANCEL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FURNITURE_MAKE_FAST_FINISH = 1089;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FURNITURE_MAKE_FAST_FINISH"] = 1089] = "ACTION_REASON_FURNITURE_MAKE_FAST_FINISH";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CHANNELLER_SLAB_LOOP_DUNGEON_FIRST_PASS_REWARD = 1090;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CHANNELLER_SLAB_LOOP_DUNGEON_FIRST_PASS_REWARD"] = 1090] = "ACTION_REASON_CHANNELLER_SLAB_LOOP_DUNGEON_FIRST_PASS_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CHANNELLER_SLAB_LOOP_DUNGEON_SCORE_REWARD = 1091;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CHANNELLER_SLAB_LOOP_DUNGEON_SCORE_REWARD"] = 1091] = "ACTION_REASON_CHANNELLER_SLAB_LOOP_DUNGEON_SCORE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_LIMITED_SHOP_BUY = 1092;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_LIMITED_SHOP_BUY"] = 1092] = "ACTION_REASON_HOME_LIMITED_SHOP_BUY";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_COIN_COLLECT = 1093;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_COIN_COLLECT"] = 1093] = "ACTION_REASON_HOME_COIN_COLLECT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SUMMER_TIME_SENTRY_TOWER_REWARD = 1094;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SUMMER_TIME_SENTRY_TOWER_REWARD"] = 1094] = "ACTION_REASON_SUMMER_TIME_SENTRY_TOWER_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SUMMER_TIME_SPRINT_BOAT_REWARD = 1095;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SUMMER_TIME_SPRINT_BOAT_REWARD"] = 1095] = "ACTION_REASON_SUMMER_TIME_SPRINT_BOAT_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SUMMER_TIME_BOSS_REWARD = 1096;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SUMMER_TIME_BOSS_REWARD"] = 1096] = "ACTION_REASON_SUMMER_TIME_BOSS_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SUMMER_TIME_BOMB_REWARD = 1097;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SUMMER_TIME_BOMB_REWARD"] = 1097] = "ACTION_REASON_SUMMER_TIME_BOMB_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_FETTER_COLLECT = 1098;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_FETTER_COLLECT"] = 1098] = "ACTION_REASON_HOME_FETTER_COLLECT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ECHO_SHELL_REWARD = 1099;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ECHO_SHELL_REWARD"] = 1099] = "ACTION_REASON_ECHO_SHELL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_EVENT_REWARD = 1100;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_EVENT_REWARD"] = 1100] = "ACTION_REASON_HOME_EVENT_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_BLITZ_RUSH_DUNGEON_REWARD = 1101;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_BLITZ_RUSH_DUNGEON_REWARD"] = 1101] = "ACTION_REASON_BLITZ_RUSH_DUNGEON_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FURNITURE_MAKE_RETURN = 1102;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FURNITURE_MAKE_RETURN"] = 1102] = "ACTION_REASON_FURNITURE_MAKE_RETURN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_PLANT_BOX_GATHER = 1103;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_PLANT_BOX_GATHER"] = 1103] = "ACTION_REASON_HOME_PLANT_BOX_GATHER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_PLANT_SEED = 1104;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_PLANT_SEED"] = 1104] = "ACTION_REASON_HOME_PLANT_SEED";
    /**
     * @generated from protobuf enum value: ACTION_REASON_HOME_PLANT_GATHER = 1105;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_HOME_PLANT_GATHER"] = 1105] = "ACTION_REASON_HOME_PLANT_GATHER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CHESS_DUNGEON_REWARD = 1106;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CHESS_DUNGEON_REWARD"] = 1106] = "ACTION_REASON_CHESS_DUNGEON_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GROUP_LINK_BUNDLE_FINISH = 1107;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GROUP_LINK_BUNDLE_FINISH"] = 1107] = "ACTION_REASON_GROUP_LINK_BUNDLE_FINISH";
    /**
     * @generated from protobuf enum value: ACTION_REASON_LUNA_RITE_SACRIFICE = 1108;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_LUNA_RITE_SACRIFICE"] = 1108] = "ACTION_REASON_LUNA_RITE_SACRIFICE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_LUNA_RITE_TAKE_SACRIFICE_REWARD = 1109;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_LUNA_RITE_TAKE_SACRIFICE_REWARD"] = 1109] = "ACTION_REASON_LUNA_RITE_TAKE_SACRIFICE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FISH_BITE = 1110;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FISH_BITE"] = 1110] = "ACTION_REASON_FISH_BITE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_FISH_SUCC = 1111;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_FISH_SUCC"] = 1111] = "ACTION_REASON_FISH_SUCC";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PLANT_FLOWER_REWARD = 1112;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PLANT_FLOWER_REWARD"] = 1112] = "ACTION_REASON_PLANT_FLOWER_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PLANT_FLOWER_DELIVER_ITEM = 1113;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PLANT_FLOWER_DELIVER_ITEM"] = 1113] = "ACTION_REASON_PLANT_FLOWER_DELIVER_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PLANT_FLOWER_GIVE_FLOWER = 1114;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PLANT_FLOWER_GIVE_FLOWER"] = 1114] = "ACTION_REASON_PLANT_FLOWER_GIVE_FLOWER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_PLANT_FLOWER_RECV_FLOWER = 1115;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_PLANT_FLOWER_RECV_FLOWER"] = 1115] = "ACTION_REASON_PLANT_FLOWER_RECV_FLOWER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ROGUE_CHALLENGE_SETTLE = 1116;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ROGUE_CHALLENGE_SETTLE"] = 1116] = "ACTION_REASON_ROGUE_CHALLENGE_SETTLE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ROGUE_TAKE_FIRST_PASS_REWARD = 1117;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ROGUE_TAKE_FIRST_PASS_REWARD"] = 1117] = "ACTION_REASON_ROGUE_TAKE_FIRST_PASS_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ROGUE_UPGRADE_SHIKIGAMI = 1118;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ROGUE_UPGRADE_SHIKIGAMI"] = 1118] = "ACTION_REASON_ROGUE_UPGRADE_SHIKIGAMI";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ROGUE_REFRESH_CARD = 1119;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ROGUE_REFRESH_CARD"] = 1119] = "ACTION_REASON_ROGUE_REFRESH_CARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_USE_WIDGET_CAPTURE_ANIMAL = 1120;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_USE_WIDGET_CAPTURE_ANIMAL"] = 1120] = "ACTION_REASON_USE_WIDGET_CAPTURE_ANIMAL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_CAPTURE_ANIMAL_SUCC = 1121;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_CAPTURE_ANIMAL_SUCC"] = 1121] = "ACTION_REASON_CAPTURE_ANIMAL_SUCC";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SNOW_DRIFTS = 1122;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SNOW_DRIFTS"] = 1122] = "ACTION_REASON_SNOW_DRIFTS";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WINTER_CAMP_GIVE_ITEM = 1123;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WINTER_CAMP_GIVE_ITEM"] = 1123] = "ACTION_REASON_WINTER_CAMP_GIVE_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WINTER_CAMP_RECV_ITEM = 1124;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WINTER_CAMP_RECV_ITEM"] = 1124] = "ACTION_REASON_WINTER_CAMP_RECV_ITEM";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WINTER_CAMP_EXPLORE_REWARD = 1125;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WINTER_CAMP_EXPLORE_REWARD"] = 1125] = "ACTION_REASON_WINTER_CAMP_EXPLORE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_WINTER_CAMP_BATTLE_REWARD = 1126;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_WINTER_CAMP_BATTLE_REWARD"] = 1126] = "ACTION_REASON_WINTER_CAMP_BATTLE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_LANTERN_RITE_SKIN_REWARD = 1127;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_LANTERN_RITE_SKIN_REWARD"] = 1127] = "ACTION_REASON_LANTERN_RITE_SKIN_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_LANTERN_RITE_DUNGEON_REWARD = 1128;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_LANTERN_RITE_DUNGEON_REWARD"] = 1128] = "ACTION_REASON_LANTERN_RITE_DUNGEON_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MICHIAE_MATSURI_DARK_CHALLENGE_REWARD = 1129;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MICHIAE_MATSURI_DARK_CHALLENGE_REWARD"] = 1129] = "ACTION_REASON_MICHIAE_MATSURI_DARK_CHALLENGE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_MICHIAE_MATSURI_UNLOCK_CRYSTAL_SKILL = 1130;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_MICHIAE_MATSURI_UNLOCK_CRYSTAL_SKILL"] = 1130] = "ACTION_REASON_MICHIAE_MATSURI_UNLOCK_CRYSTAL_SKILL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_LANTERN_RITE_GROUP_REWARD = 1131;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_LANTERN_RITE_GROUP_REWARD"] = 1131] = "ACTION_REASON_LANTERN_RITE_GROUP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_COSTUME_DEFAULT_UNLOCK = 1132;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_COSTUME_DEFAULT_UNLOCK"] = 1132] = "ACTION_REASON_COSTUME_DEFAULT_UNLOCK";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SPICE_ACTIVITY_MAKE_SPICE = 1133;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SPICE_ACTIVITY_MAKE_SPICE"] = 1133] = "ACTION_REASON_SPICE_ACTIVITY_MAKE_SPICE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SPICE_ACTIVITY_PROCESS_FOOD = 1134;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SPICE_ACTIVITY_PROCESS_FOOD"] = 1134] = "ACTION_REASON_SPICE_ACTIVITY_PROCESS_FOOD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SPICE_ADD_AVATAR_FETTER = 1135;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SPICE_ADD_AVATAR_FETTER"] = 1135] = "ACTION_REASON_SPICE_ADD_AVATAR_FETTER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GACHA_ACTIVITY_ROBOT_REWARD = 1136;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GACHA_ACTIVITY_ROBOT_REWARD"] = 1136] = "ACTION_REASON_GACHA_ACTIVITY_ROBOT_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GIVING_TAKE_BACK = 1137;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GIVING_TAKE_BACK"] = 1137] = "ACTION_REASON_GIVING_TAKE_BACK";
    /**
     * @generated from protobuf enum value: ACTION_REASON_SUMMER_TIME_V2_DUNGEON_REWARD = 1138;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_SUMMER_TIME_V2_DUNGEON_REWARD"] = 1138] = "ACTION_REASON_SUMMER_TIME_V2_DUNGEON_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GRAVEN_INNOCENCE_CAMP_REWARD = 1139;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GRAVEN_INNOCENCE_CAMP_REWARD"] = 1139] = "ACTION_REASON_GRAVEN_INNOCENCE_CAMP_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_TREASURE_SEELIE_CHEST_REWARD = 1140;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_TREASURE_SEELIE_CHEST_REWARD"] = 1140] = "ACTION_REASON_TREASURE_SEELIE_CHEST_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GCG_TARVERN_CHALLENGE_UNLOCK_CHARACTER = 1141;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GCG_TARVERN_CHALLENGE_UNLOCK_CHARACTER"] = 1141] = "ACTION_REASON_GCG_TARVERN_CHALLENGE_UNLOCK_CHARACTER";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GCG_TARVERN_CHALLENGE_FINISH = 1142;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GCG_TARVERN_CHALLENGE_FINISH"] = 1142] = "ACTION_REASON_GCG_TARVERN_CHALLENGE_FINISH";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GCG_LEVEL_REWARD = 1143;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GCG_LEVEL_REWARD"] = 1143] = "ACTION_REASON_GCG_LEVEL_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_GCG_CHALLENGE_FINISH = 1144;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_GCG_CHALLENGE_FINISH"] = 1144] = "ACTION_REASON_GCG_CHALLENGE_FINISH";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_MARKET_DEAL = 1145;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_MARKET_DEAL"] = 1145] = "ACTION_REASON_VINTAGE_MARKET_DEAL";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_MARKET_BARGAIN = 1146;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_MARKET_BARGAIN"] = 1146] = "ACTION_REASON_VINTAGE_MARKET_BARGAIN";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_MARKET_STORE = 1147;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_MARKET_STORE"] = 1147] = "ACTION_REASON_VINTAGE_MARKET_STORE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_PRESENT = 1148;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_PRESENT"] = 1148] = "ACTION_REASON_VINTAGE_PRESENT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_OPEN_STORE = 1149;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_OPEN_STORE"] = 1149] = "ACTION_REASON_VINTAGE_OPEN_STORE";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_STORE_UNLOCK_SLOT = 1150;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_STORE_UNLOCK_SLOT"] = 1150] = "ACTION_REASON_VINTAGE_STORE_UNLOCK_SLOT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_STORE_NPC_EVENT = 1151;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_STORE_NPC_EVENT"] = 1151] = "ACTION_REASON_VINTAGE_STORE_NPC_EVENT";
    /**
     * @generated from protobuf enum value: ACTION_REASON_ROCK_BOARD_EXPLORE_REWARD = 1152;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_ROCK_BOARD_EXPLORE_REWARD"] = 1152] = "ACTION_REASON_ROCK_BOARD_EXPLORE_REWARD";
    /**
     * @generated from protobuf enum value: ACTION_REASON_VINTAGE_STORE_DIVIDEND = 1153;
     */
    ActionReasonType[ActionReasonType["ACTION_REASON_VINTAGE_STORE_DIVIDEND"] = 1153] = "ACTION_REASON_VINTAGE_STORE_DIVIDEND";
})(ActionReasonType = exports.ActionReasonType || (exports.ActionReasonType = {}));
/**
 * @generated from protobuf enum com.midnights.game.StoreType
 */
var StoreType;
(function (StoreType) {
    /**
     * @generated from protobuf enum value: STORE_NONE = 0;
     */
    StoreType[StoreType["STORE_NONE"] = 0] = "STORE_NONE";
    /**
     * @generated from protobuf enum value: STORE_PACK = 1;
     */
    StoreType[StoreType["STORE_PACK"] = 1] = "STORE_PACK";
    /**
     * @generated from protobuf enum value: STORE_DEPOT = 2;
     */
    StoreType[StoreType["STORE_DEPOT"] = 2] = "STORE_DEPOT";
})(StoreType = exports.StoreType || (exports.StoreType = {}));
/**
 * @generated from protobuf enum com.midnights.game.VirtualItem
 */
var VirtualItem;
(function (VirtualItem) {
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_NONE = 0;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_NONE"] = 0] = "ITEM_VIRTUAL_NONE";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_AVATAR_EXP = 101;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_AVATAR_EXP"] = 101] = "ITEM_VIRTUAL_AVATAR_EXP";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_PLAYER_EXP = 102;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_PLAYER_EXP"] = 102] = "ITEM_VIRTUAL_PLAYER_EXP";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_FETTER_EXP = 105;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_FETTER_EXP"] = 105] = "ITEM_VIRTUAL_FETTER_EXP";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_RESIN = 106;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_RESIN"] = 106] = "ITEM_VIRTUAL_RESIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_LEGENDARY_KEY = 107;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_LEGENDARY_KEY"] = 107] = "ITEM_VIRTUAL_LEGENDARY_KEY";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ASTER_PROGRESS = 108;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ASTER_PROGRESS"] = 108] = "ITEM_VIRTUAL_ASTER_PROGRESS";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ASTER_CREDIT = 109;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ASTER_CREDIT"] = 109] = "ITEM_VIRTUAL_ASTER_CREDIT";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ASTER_TOKEN = 110;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ASTER_TOKEN"] = 110] = "ITEM_VIRTUAL_ASTER_TOKEN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SHIMMERING_ESSENCE = 111;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SHIMMERING_ESSENCE"] = 111] = "ITEM_VIRTUAL_SHIMMERING_ESSENCE";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_WARM_ESSENCE = 112;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_WARM_ESSENCE"] = 112] = "ITEM_VIRTUAL_WARM_ESSENCE";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_WONDROUS_ESSENCE = 113;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_WONDROUS_ESSENCE"] = 113] = "ITEM_VIRTUAL_WONDROUS_ESSENCE";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_TREASURE_MAP_TOKEN = 114;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_TREASURE_MAP_TOKEN"] = 114] = "ITEM_VIRTUAL_TREASURE_MAP_TOKEN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SEA_LAMP_COIN = 115;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SEA_LAMP_COIN"] = 115] = "ITEM_VIRTUAL_SEA_LAMP_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SEA_LAMP_POPULARITY = 116;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SEA_LAMP_POPULARITY"] = 116] = "ITEM_VIRTUAL_SEA_LAMP_POPULARITY";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_MECHANICUS_COIN = 117;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_MECHANICUS_COIN"] = 117] = "ITEM_VIRTUAL_MECHANICUS_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_FLEUR_FAIR_CREDIT = 118;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_FLEUR_FAIR_CREDIT"] = 118] = "ITEM_VIRTUAL_FLEUR_FAIR_CREDIT";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_FLEUR_FAIR_TOKEN = 119;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_FLEUR_FAIR_TOKEN"] = 119] = "ITEM_VIRTUAL_FLEUR_FAIR_TOKEN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_WATER_SPIRIT_COIN = 120;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_WATER_SPIRIT_COIN"] = 120] = "ITEM_VIRTUAL_WATER_SPIRIT_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_HOME_EXP = 121;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_HOME_EXP"] = 121] = "ITEM_VIRTUAL_HOME_EXP";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_CHANNELLER_SLAB_TOKEN = 122;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_CHANNELLER_SLAB_TOKEN"] = 122] = "ITEM_VIRTUAL_CHANNELLER_SLAB_TOKEN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_HIDE_AND_SEEK_COIN = 123;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_HIDE_AND_SEEK_COIN"] = 123] = "ITEM_VIRTUAL_HIDE_AND_SEEK_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SUMMER_TIME_DRAFT_WOOD = 124;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SUMMER_TIME_DRAFT_WOOD"] = 124] = "ITEM_VIRTUAL_SUMMER_TIME_DRAFT_WOOD";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SUMMER_TIME_MINI_HARPASTUM = 125;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SUMMER_TIME_MINI_HARPASTUM"] = 125] = "ITEM_VIRTUAL_SUMMER_TIME_MINI_HARPASTUM";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_BOUNCE_CONJURING_COIN = 126;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_BOUNCE_CONJURING_COIN"] = 126] = "ITEM_VIRTUAL_BOUNCE_CONJURING_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_BLITZ_RUSH_COIN_A = 127;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_BLITZ_RUSH_COIN_A"] = 127] = "ITEM_VIRTUAL_BLITZ_RUSH_COIN_A";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_BLITZ_RUSH_COIN_B = 128;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_BLITZ_RUSH_COIN_B"] = 128] = "ITEM_VIRTUAL_BLITZ_RUSH_COIN_B";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_CHESS_EXP = 129;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_CHESS_EXP"] = 129] = "ITEM_VIRTUAL_CHESS_EXP";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_CHESS_COIN = 130;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_CHESS_COIN"] = 130] = "ITEM_VIRTUAL_CHESS_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_LUNA_RITE_ATMOSPHERE = 131;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_LUNA_RITE_ATMOSPHERE"] = 131] = "ITEM_VIRTUAL_LUNA_RITE_ATMOSPHERE";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ROGUELIKE_COIN_A = 132;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ROGUELIKE_COIN_A"] = 132] = "ITEM_VIRTUAL_ROGUELIKE_COIN_A";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ROGUELIKE_COIN_B = 133;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ROGUELIKE_COIN_B"] = 133] = "ITEM_VIRTUAL_ROGUELIKE_COIN_B";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ROGUELIKE_COIN_C = 134;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ROGUELIKE_COIN_C"] = 134] = "ITEM_VIRTUAL_ROGUELIKE_COIN_C";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_WINTER_CAMP_COIN_A = 135;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_WINTER_CAMP_COIN_A"] = 135] = "ITEM_VIRTUAL_WINTER_CAMP_COIN_A";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_WINTER_CAMP_COIN_B = 136;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_WINTER_CAMP_COIN_B"] = 136] = "ITEM_VIRTUAL_WINTER_CAMP_COIN_B";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_LANTERN_RITE_COIN_A = 137;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_LANTERN_RITE_COIN_A"] = 137] = "ITEM_VIRTUAL_LANTERN_RITE_COIN_A";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_LANTERN_RITE_COIN_B = 138;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_LANTERN_RITE_COIN_B"] = 138] = "ITEM_VIRTUAL_LANTERN_RITE_COIN_B";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_LANTERN_RITE_COIN_C = 139;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_LANTERN_RITE_COIN_C"] = 139] = "ITEM_VIRTUAL_LANTERN_RITE_COIN_C";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ROGUE_DIARY_COIN = 140;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ROGUE_DIARY_COIN"] = 140] = "ITEM_VIRTUAL_ROGUE_DIARY_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SUMMER_TIME_V2_COIN = 141;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SUMMER_TIME_V2_COIN"] = 141] = "ITEM_VIRTUAL_SUMMER_TIME_V2_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_ROGUE_DIARY_DUNGEON_COIN = 142;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_ROGUE_DIARY_DUNGEON_COIN"] = 142] = "ITEM_VIRTUAL_ROGUE_DIARY_DUNGEON_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_A = 143;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_A"] = 143] = "ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_A";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_B = 144;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_B"] = 144] = "ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_B";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_TREASURE_SEELIE_COIN = 145;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_TREASURE_SEELIE_COIN"] = 145] = "ITEM_VIRTUAL_TREASURE_SEELIE_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_VINTAGE_POPULARITY = 147;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_VINTAGE_POPULARITY"] = 147] = "ITEM_VIRTUAL_VINTAGE_POPULARITY";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_GCG_EXP = 146;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_GCG_EXP"] = 146] = "ITEM_VIRTUAL_GCG_EXP";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_VINTAGE_MARKET_COIN_A = 148;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_VINTAGE_MARKET_COIN_A"] = 148] = "ITEM_VIRTUAL_VINTAGE_MARKET_COIN_A";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_VINTAGE_MARKET_COIN_B = 149;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_VINTAGE_MARKET_COIN_B"] = 149] = "ITEM_VIRTUAL_VINTAGE_MARKET_COIN_B";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_VINTAGE_MARKET_COIN_C = 150;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_VINTAGE_MARKET_COIN_C"] = 150] = "ITEM_VIRTUAL_VINTAGE_MARKET_COIN_C";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_FUNGUS_FIGHTER_CAPTURE_COIN = 151;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_FUNGUS_FIGHTER_CAPTURE_COIN"] = 151] = "ITEM_VIRTUAL_FUNGUS_FIGHTER_CAPTURE_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_FUNGUS_FIGHTER_TRAINING_COIN = 152;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_FUNGUS_FIGHTER_TRAINING_COIN"] = 152] = "ITEM_VIRTUAL_FUNGUS_FIGHTER_TRAINING_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_EFFIGY_CHALLENGE_V2_COIN = 153;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_EFFIGY_CHALLENGE_V2_COIN"] = 153] = "ITEM_VIRTUAL_EFFIGY_CHALLENGE_V2_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_HCOIN = 201;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_HCOIN"] = 201] = "ITEM_VIRTUAL_HCOIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SCOIN = 202;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SCOIN"] = 202] = "ITEM_VIRTUAL_SCOIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_MCOIN = 203;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_MCOIN"] = 203] = "ITEM_VIRTUAL_MCOIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_HOME_COIN = 204;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_HOME_COIN"] = 204] = "ITEM_VIRTUAL_HOME_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_GCG_COIN = 205;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_GCG_COIN"] = 205] = "ITEM_VIRTUAL_GCG_COIN";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_INAZUMA_REPUTATION = 314;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_INAZUMA_REPUTATION"] = 314] = "ITEM_VIRTUAL_INAZUMA_REPUTATION";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_MENGDE_REPUTATION = 315;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_MENGDE_REPUTATION"] = 315] = "ITEM_VIRTUAL_MENGDE_REPUTATION";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_SUMERU_REPUTATION = 316;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_SUMERU_REPUTATION"] = 316] = "ITEM_VIRTUAL_SUMERU_REPUTATION";
    /**
     * @generated from protobuf enum value: ITEM_VIRTUAL_LIYUE_REPUTATION = 317;
     */
    VirtualItem[VirtualItem["ITEM_VIRTUAL_LIYUE_REPUTATION"] = 317] = "ITEM_VIRTUAL_LIYUE_REPUTATION";
})(VirtualItem = exports.VirtualItem || (exports.VirtualItem = {}));
/**
 * @generated from protobuf enum com.midnights.game.AbilityScalarType
 */
var AbilityScalarType;
(function (AbilityScalarType) {
    /**
     * @generated from protobuf enum value: ABILITY_SCALAR_TYPE_UNKNOW = 0;
     */
    AbilityScalarType[AbilityScalarType["UNKNOW"] = 0] = "UNKNOW";
    /**
     * @generated from protobuf enum value: ABILITY_SCALAR_TYPE_FLOAT = 1;
     */
    AbilityScalarType[AbilityScalarType["FLOAT"] = 1] = "FLOAT";
    /**
     * @generated from protobuf enum value: ABILITY_SCALAR_TYPE_INT = 2;
     */
    AbilityScalarType[AbilityScalarType["INT"] = 2] = "INT";
    /**
     * @generated from protobuf enum value: ABILITY_SCALAR_TYPE_BOOL = 3;
     */
    AbilityScalarType[AbilityScalarType["BOOL"] = 3] = "BOOL";
    /**
     * @generated from protobuf enum value: ABILITY_SCALAR_TYPE_TRIGGER = 4;
     */
    AbilityScalarType[AbilityScalarType["TRIGGER"] = 4] = "TRIGGER";
    /**
     * @generated from protobuf enum value: ABILITY_SCALAR_TYPE_STRING = 5;
     */
    AbilityScalarType[AbilityScalarType["STRING"] = 5] = "STRING";
    /**
     * @generated from protobuf enum value: ABILITY_SCALAR_TYPE_UINT = 6;
     */
    AbilityScalarType[AbilityScalarType["UINT"] = 6] = "UINT";
})(AbilityScalarType = exports.AbilityScalarType || (exports.AbilityScalarType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MotionState
 */
var MotionState;
(function (MotionState) {
    /**
     * @generated from protobuf enum value: MOTION_NONE = 0;
     */
    MotionState[MotionState["MOTION_NONE"] = 0] = "MOTION_NONE";
    /**
     * @generated from protobuf enum value: MOTION_RESET = 1;
     */
    MotionState[MotionState["MOTION_RESET"] = 1] = "MOTION_RESET";
    /**
     * @generated from protobuf enum value: MOTION_STANDBY = 2;
     */
    MotionState[MotionState["MOTION_STANDBY"] = 2] = "MOTION_STANDBY";
    /**
     * @generated from protobuf enum value: MOTION_STANDBY_MOVE = 3;
     */
    MotionState[MotionState["MOTION_STANDBY_MOVE"] = 3] = "MOTION_STANDBY_MOVE";
    /**
     * @generated from protobuf enum value: MOTION_WALK = 4;
     */
    MotionState[MotionState["MOTION_WALK"] = 4] = "MOTION_WALK";
    /**
     * @generated from protobuf enum value: MOTION_RUN = 5;
     */
    MotionState[MotionState["MOTION_RUN"] = 5] = "MOTION_RUN";
    /**
     * @generated from protobuf enum value: MOTION_DASH = 6;
     */
    MotionState[MotionState["MOTION_DASH"] = 6] = "MOTION_DASH";
    /**
     * @generated from protobuf enum value: MOTION_CLIMB = 7;
     */
    MotionState[MotionState["MOTION_CLIMB"] = 7] = "MOTION_CLIMB";
    /**
     * @generated from protobuf enum value: MOTION_CLIMB_JUMP = 8;
     */
    MotionState[MotionState["MOTION_CLIMB_JUMP"] = 8] = "MOTION_CLIMB_JUMP";
    /**
     * @generated from protobuf enum value: MOTION_STANDBY_TO_CLIMB = 9;
     */
    MotionState[MotionState["MOTION_STANDBY_TO_CLIMB"] = 9] = "MOTION_STANDBY_TO_CLIMB";
    /**
     * @generated from protobuf enum value: MOTION_FIGHT = 10;
     */
    MotionState[MotionState["MOTION_FIGHT"] = 10] = "MOTION_FIGHT";
    /**
     * @generated from protobuf enum value: MOTION_JUMP = 11;
     */
    MotionState[MotionState["MOTION_JUMP"] = 11] = "MOTION_JUMP";
    /**
     * @generated from protobuf enum value: MOTION_DROP = 12;
     */
    MotionState[MotionState["MOTION_DROP"] = 12] = "MOTION_DROP";
    /**
     * @generated from protobuf enum value: MOTION_FLY = 13;
     */
    MotionState[MotionState["MOTION_FLY"] = 13] = "MOTION_FLY";
    /**
     * @generated from protobuf enum value: MOTION_SWIM_MOVE = 14;
     */
    MotionState[MotionState["MOTION_SWIM_MOVE"] = 14] = "MOTION_SWIM_MOVE";
    /**
     * @generated from protobuf enum value: MOTION_SWIM_IDLE = 15;
     */
    MotionState[MotionState["MOTION_SWIM_IDLE"] = 15] = "MOTION_SWIM_IDLE";
    /**
     * @generated from protobuf enum value: MOTION_SWIM_DASH = 16;
     */
    MotionState[MotionState["MOTION_SWIM_DASH"] = 16] = "MOTION_SWIM_DASH";
    /**
     * @generated from protobuf enum value: MOTION_SWIM_JUMP = 17;
     */
    MotionState[MotionState["MOTION_SWIM_JUMP"] = 17] = "MOTION_SWIM_JUMP";
    /**
     * @generated from protobuf enum value: MOTION_SLIP = 18;
     */
    MotionState[MotionState["MOTION_SLIP"] = 18] = "MOTION_SLIP";
    /**
     * @generated from protobuf enum value: MOTION_GO_UPSTAIRS = 19;
     */
    MotionState[MotionState["MOTION_GO_UPSTAIRS"] = 19] = "MOTION_GO_UPSTAIRS";
    /**
     * @generated from protobuf enum value: MOTION_FALL_ON_GROUND = 20;
     */
    MotionState[MotionState["MOTION_FALL_ON_GROUND"] = 20] = "MOTION_FALL_ON_GROUND";
    /**
     * @generated from protobuf enum value: MOTION_JUMP_UP_WALL_FOR_STANDBY = 21;
     */
    MotionState[MotionState["MOTION_JUMP_UP_WALL_FOR_STANDBY"] = 21] = "MOTION_JUMP_UP_WALL_FOR_STANDBY";
    /**
     * @generated from protobuf enum value: MOTION_JUMP_OFF_WALL = 22;
     */
    MotionState[MotionState["MOTION_JUMP_OFF_WALL"] = 22] = "MOTION_JUMP_OFF_WALL";
    /**
     * @generated from protobuf enum value: MOTION_POWERED_FLY = 23;
     */
    MotionState[MotionState["MOTION_POWERED_FLY"] = 23] = "MOTION_POWERED_FLY";
    /**
     * @generated from protobuf enum value: MOTION_LADDER_IDLE = 24;
     */
    MotionState[MotionState["MOTION_LADDER_IDLE"] = 24] = "MOTION_LADDER_IDLE";
    /**
     * @generated from protobuf enum value: MOTION_LADDER_MOVE = 25;
     */
    MotionState[MotionState["MOTION_LADDER_MOVE"] = 25] = "MOTION_LADDER_MOVE";
    /**
     * @generated from protobuf enum value: MOTION_LADDER_SLIP = 26;
     */
    MotionState[MotionState["MOTION_LADDER_SLIP"] = 26] = "MOTION_LADDER_SLIP";
    /**
     * @generated from protobuf enum value: MOTION_STANDBY_TO_LADDER = 27;
     */
    MotionState[MotionState["MOTION_STANDBY_TO_LADDER"] = 27] = "MOTION_STANDBY_TO_LADDER";
    /**
     * @generated from protobuf enum value: MOTION_LADDER_TO_STANDBY = 28;
     */
    MotionState[MotionState["MOTION_LADDER_TO_STANDBY"] = 28] = "MOTION_LADDER_TO_STANDBY";
    /**
     * @generated from protobuf enum value: MOTION_DANGER_STANDBY = 29;
     */
    MotionState[MotionState["MOTION_DANGER_STANDBY"] = 29] = "MOTION_DANGER_STANDBY";
    /**
     * @generated from protobuf enum value: MOTION_DANGER_STANDBY_MOVE = 30;
     */
    MotionState[MotionState["MOTION_DANGER_STANDBY_MOVE"] = 30] = "MOTION_DANGER_STANDBY_MOVE";
    /**
     * @generated from protobuf enum value: MOTION_DANGER_WALK = 31;
     */
    MotionState[MotionState["MOTION_DANGER_WALK"] = 31] = "MOTION_DANGER_WALK";
    /**
     * @generated from protobuf enum value: MOTION_DANGER_RUN = 32;
     */
    MotionState[MotionState["MOTION_DANGER_RUN"] = 32] = "MOTION_DANGER_RUN";
    /**
     * @generated from protobuf enum value: MOTION_DANGER_DASH = 33;
     */
    MotionState[MotionState["MOTION_DANGER_DASH"] = 33] = "MOTION_DANGER_DASH";
    /**
     * @generated from protobuf enum value: MOTION_CROUCH_IDLE = 34;
     */
    MotionState[MotionState["MOTION_CROUCH_IDLE"] = 34] = "MOTION_CROUCH_IDLE";
    /**
     * @generated from protobuf enum value: MOTION_CROUCH_MOVE = 35;
     */
    MotionState[MotionState["MOTION_CROUCH_MOVE"] = 35] = "MOTION_CROUCH_MOVE";
    /**
     * @generated from protobuf enum value: MOTION_CROUCH_ROLL = 36;
     */
    MotionState[MotionState["MOTION_CROUCH_ROLL"] = 36] = "MOTION_CROUCH_ROLL";
    /**
     * @generated from protobuf enum value: MOTION_NOTIFY = 37;
     */
    MotionState[MotionState["MOTION_NOTIFY"] = 37] = "MOTION_NOTIFY";
    /**
     * @generated from protobuf enum value: MOTION_LAND_SPEED = 38;
     */
    MotionState[MotionState["MOTION_LAND_SPEED"] = 38] = "MOTION_LAND_SPEED";
    /**
     * @generated from protobuf enum value: MOTION_MOVE_FAIL_ACK = 39;
     */
    MotionState[MotionState["MOTION_MOVE_FAIL_ACK"] = 39] = "MOTION_MOVE_FAIL_ACK";
    /**
     * @generated from protobuf enum value: MOTION_WATERFALL = 40;
     */
    MotionState[MotionState["MOTION_WATERFALL"] = 40] = "MOTION_WATERFALL";
    /**
     * @generated from protobuf enum value: MOTION_DASH_BEFORE_SHAKE = 41;
     */
    MotionState[MotionState["MOTION_DASH_BEFORE_SHAKE"] = 41] = "MOTION_DASH_BEFORE_SHAKE";
    /**
     * @generated from protobuf enum value: MOTION_SIT_IDLE = 42;
     */
    MotionState[MotionState["MOTION_SIT_IDLE"] = 42] = "MOTION_SIT_IDLE";
    /**
     * @generated from protobuf enum value: MOTION_FORCE_SET_POS = 43;
     */
    MotionState[MotionState["MOTION_FORCE_SET_POS"] = 43] = "MOTION_FORCE_SET_POS";
    /**
     * @generated from protobuf enum value: MOTION_QUEST_FORCE_DRAG = 44;
     */
    MotionState[MotionState["MOTION_QUEST_FORCE_DRAG"] = 44] = "MOTION_QUEST_FORCE_DRAG";
    /**
     * @generated from protobuf enum value: MOTION_FOLLOW_ROUTE = 45;
     */
    MotionState[MotionState["MOTION_FOLLOW_ROUTE"] = 45] = "MOTION_FOLLOW_ROUTE";
    /**
     * @generated from protobuf enum value: MOTION_SKIFF_BOARDING = 46;
     */
    MotionState[MotionState["MOTION_SKIFF_BOARDING"] = 46] = "MOTION_SKIFF_BOARDING";
    /**
     * @generated from protobuf enum value: MOTION_SKIFF_NORMAL = 47;
     */
    MotionState[MotionState["MOTION_SKIFF_NORMAL"] = 47] = "MOTION_SKIFF_NORMAL";
    /**
     * @generated from protobuf enum value: MOTION_SKIFF_DASH = 48;
     */
    MotionState[MotionState["MOTION_SKIFF_DASH"] = 48] = "MOTION_SKIFF_DASH";
    /**
     * @generated from protobuf enum value: MOTION_SKIFF_POWERED_DASH = 49;
     */
    MotionState[MotionState["MOTION_SKIFF_POWERED_DASH"] = 49] = "MOTION_SKIFF_POWERED_DASH";
    /**
     * @generated from protobuf enum value: MOTION_DESTROY_VEHICLE = 50;
     */
    MotionState[MotionState["MOTION_DESTROY_VEHICLE"] = 50] = "MOTION_DESTROY_VEHICLE";
    /**
     * @generated from protobuf enum value: MOTION_FLY_IDLE = 51;
     */
    MotionState[MotionState["MOTION_FLY_IDLE"] = 51] = "MOTION_FLY_IDLE";
    /**
     * @generated from protobuf enum value: MOTION_FLY_SLOW = 52;
     */
    MotionState[MotionState["MOTION_FLY_SLOW"] = 52] = "MOTION_FLY_SLOW";
    /**
     * @generated from protobuf enum value: MOTION_FLY_FAST = 53;
     */
    MotionState[MotionState["MOTION_FLY_FAST"] = 53] = "MOTION_FLY_FAST";
    /**
     * @generated from protobuf enum value: MOTION_AIM_MOVE = 54;
     */
    MotionState[MotionState["MOTION_AIM_MOVE"] = 54] = "MOTION_AIM_MOVE";
    /**
     * @generated from protobuf enum value: MOTION_AIR_COMPENSATION = 55;
     */
    MotionState[MotionState["MOTION_AIR_COMPENSATION"] = 55] = "MOTION_AIR_COMPENSATION";
    /**
     * @generated from protobuf enum value: MOTION_NUM = 56;
     */
    MotionState[MotionState["MOTION_NUM"] = 56] = "MOTION_NUM";
})(MotionState = exports.MotionState || (exports.MotionState = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProtEntityType
 */
var ProtEntityType;
(function (ProtEntityType) {
    /**
     * @generated from protobuf enum value: PROT_ENTITY_NONE = 0;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_NONE"] = 0] = "PROT_ENTITY_NONE";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_AVATAR = 1;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_AVATAR"] = 1] = "PROT_ENTITY_AVATAR";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_MONSTER = 2;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_MONSTER"] = 2] = "PROT_ENTITY_MONSTER";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_NPC = 3;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_NPC"] = 3] = "PROT_ENTITY_NPC";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_GADGET = 4;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_GADGET"] = 4] = "PROT_ENTITY_GADGET";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_REGION = 5;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_REGION"] = 5] = "PROT_ENTITY_REGION";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_WEAPON = 6;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_WEAPON"] = 6] = "PROT_ENTITY_WEAPON";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_WEATHER = 7;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_WEATHER"] = 7] = "PROT_ENTITY_WEATHER";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_SCENE = 8;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_SCENE"] = 8] = "PROT_ENTITY_SCENE";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_TEAM = 9;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_TEAM"] = 9] = "PROT_ENTITY_TEAM";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_MASSIVE_ENTITY = 10;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_MASSIVE_ENTITY"] = 10] = "PROT_ENTITY_MASSIVE_ENTITY";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_MP_LEVEL = 11;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_MP_LEVEL"] = 11] = "PROT_ENTITY_MP_LEVEL";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_PLAY_TEAM_ENTITY = 12;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_PLAY_TEAM_ENTITY"] = 12] = "PROT_ENTITY_PLAY_TEAM_ENTITY";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_EYE_POINT = 13;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_EYE_POINT"] = 13] = "PROT_ENTITY_EYE_POINT";
    /**
     * @generated from protobuf enum value: PROT_ENTITY_MAX = 14;
     */
    ProtEntityType[ProtEntityType["PROT_ENTITY_MAX"] = 14] = "PROT_ENTITY_MAX";
})(ProtEntityType = exports.ProtEntityType || (exports.ProtEntityType = {}));
/**
 * @generated from protobuf enum com.midnights.game.NpcTalkState
 */
var NpcTalkState;
(function (NpcTalkState) {
    /**
     * @generated from protobuf enum value: NPC_TALK_NONE = 0;
     */
    NpcTalkState[NpcTalkState["NPC_TALK_NONE"] = 0] = "NPC_TALK_NONE";
    /**
     * @generated from protobuf enum value: NPC_TALK_AUTO = 1;
     */
    NpcTalkState[NpcTalkState["NPC_TALK_AUTO"] = 1] = "NPC_TALK_AUTO";
    /**
     * @generated from protobuf enum value: NPC_TALK_MANUAL = 2;
     */
    NpcTalkState[NpcTalkState["NPC_TALK_MANUAL"] = 2] = "NPC_TALK_MANUAL";
})(NpcTalkState = exports.NpcTalkState || (exports.NpcTalkState = {}));
/**
 * @generated from protobuf enum com.midnights.game.VehicleSlot
 */
var VehicleSlot;
(function (VehicleSlot) {
    /**
     * @generated from protobuf enum value: VEHICLE_SLOT_OPERATOR = 0;
     */
    VehicleSlot[VehicleSlot["OPERATOR"] = 0] = "OPERATOR";
})(VehicleSlot = exports.VehicleSlot || (exports.VehicleSlot = {}));
/**
 * @generated from protobuf enum com.midnights.game.MonsterBornType
 */
var MonsterBornType;
(function (MonsterBornType) {
    /**
     * @generated from protobuf enum value: MONSTER_BORN_NONE = 0;
     */
    MonsterBornType[MonsterBornType["MONSTER_BORN_NONE"] = 0] = "MONSTER_BORN_NONE";
    /**
     * @generated from protobuf enum value: MONSTER_BORN_DEFAULT = 1;
     */
    MonsterBornType[MonsterBornType["MONSTER_BORN_DEFAULT"] = 1] = "MONSTER_BORN_DEFAULT";
    /**
     * @generated from protobuf enum value: MONSTER_BORN_RANDOM = 2;
     */
    MonsterBornType[MonsterBornType["MONSTER_BORN_RANDOM"] = 2] = "MONSTER_BORN_RANDOM";
})(MonsterBornType = exports.MonsterBornType || (exports.MonsterBornType = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetBornType
 */
var GadgetBornType;
(function (GadgetBornType) {
    /**
     * @generated from protobuf enum value: GADGET_BORN_NONE = 0;
     */
    GadgetBornType[GadgetBornType["GADGET_BORN_NONE"] = 0] = "GADGET_BORN_NONE";
    /**
     * @generated from protobuf enum value: GADGET_BORN_IN_AIR = 1;
     */
    GadgetBornType[GadgetBornType["GADGET_BORN_IN_AIR"] = 1] = "GADGET_BORN_IN_AIR";
    /**
     * @generated from protobuf enum value: GADGET_BORN_PLAYER = 2;
     */
    GadgetBornType[GadgetBornType["GADGET_BORN_PLAYER"] = 2] = "GADGET_BORN_PLAYER";
    /**
     * @generated from protobuf enum value: GADGET_BORN_MONSTER_HIT = 3;
     */
    GadgetBornType[GadgetBornType["GADGET_BORN_MONSTER_HIT"] = 3] = "GADGET_BORN_MONSTER_HIT";
    /**
     * @generated from protobuf enum value: GADGET_BORN_MONSTER_DIE = 4;
     */
    GadgetBornType[GadgetBornType["GADGET_BORN_MONSTER_DIE"] = 4] = "GADGET_BORN_MONSTER_DIE";
    /**
     * @generated from protobuf enum value: GADGET_BORN_GADGET = 5;
     */
    GadgetBornType[GadgetBornType["GADGET_BORN_GADGET"] = 5] = "GADGET_BORN_GADGET";
    /**
     * @generated from protobuf enum value: GADGET_BORN_GROUND = 6;
     */
    GadgetBornType[GadgetBornType["GADGET_BORN_GROUND"] = 6] = "GADGET_BORN_GROUND";
})(GadgetBornType = exports.GadgetBornType || (exports.GadgetBornType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MovingPlatformType
 */
var MovingPlatformType;
(function (MovingPlatformType) {
    /**
     * @generated from protobuf enum value: MOVING_PLATFORM_NONE = 0;
     */
    MovingPlatformType[MovingPlatformType["MOVING_PLATFORM_NONE"] = 0] = "MOVING_PLATFORM_NONE";
    /**
     * @generated from protobuf enum value: MOVING_PLATFORM_USE_CONFIG = 1;
     */
    MovingPlatformType[MovingPlatformType["MOVING_PLATFORM_USE_CONFIG"] = 1] = "MOVING_PLATFORM_USE_CONFIG";
    /**
     * @generated from protobuf enum value: MOVING_PLATFORM_ABILITY = 2;
     */
    MovingPlatformType[MovingPlatformType["MOVING_PLATFORM_ABILITY"] = 2] = "MOVING_PLATFORM_ABILITY";
    /**
     * @generated from protobuf enum value: MOVING_PLATFORM_ROUTE = 3;
     */
    MovingPlatformType[MovingPlatformType["MOVING_PLATFORM_ROUTE"] = 3] = "MOVING_PLATFORM_ROUTE";
})(MovingPlatformType = exports.MovingPlatformType || (exports.MovingPlatformType = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetPlayType
 */
var GadgetPlayType;
(function (GadgetPlayType) {
    /**
     * @generated from protobuf enum value: GADGET_PLAY_NONE = 0;
     */
    GadgetPlayType[GadgetPlayType["GADGET_PLAY_NONE"] = 0] = "GADGET_PLAY_NONE";
    /**
     * @generated from protobuf enum value: GADGET_PLAY_CRUSIBLE = 1;
     */
    GadgetPlayType[GadgetPlayType["GADGET_PLAY_CRUSIBLE"] = 1] = "GADGET_PLAY_CRUSIBLE";
})(GadgetPlayType = exports.GadgetPlayType || (exports.GadgetPlayType = {}));
/**
 * @generated from protobuf enum com.midnights.game.FoundationStatus
 */
var FoundationStatus;
(function (FoundationStatus) {
    /**
     * @generated from protobuf enum value: FOUNDATION_STATUS_NONE = 0;
     */
    FoundationStatus[FoundationStatus["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: FOUNDATION_STATUS_INIT = 1;
     */
    FoundationStatus[FoundationStatus["INIT"] = 1] = "INIT";
    /**
     * @generated from protobuf enum value: FOUNDATION_STATUS_BUILDING = 2;
     */
    FoundationStatus[FoundationStatus["BUILDING"] = 2] = "BUILDING";
    /**
     * @generated from protobuf enum value: FOUNDATION_STATUS_BUILT = 3;
     */
    FoundationStatus[FoundationStatus["BUILT"] = 3] = "BUILT";
})(FoundationStatus = exports.FoundationStatus || (exports.FoundationStatus = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangHpReason
 */
var ChangHpReason;
(function (ChangHpReason) {
    /**
     * @generated from protobuf enum value: CHANGE_HP_NONE = 0;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_NONE"] = 0] = "CHANGE_HP_NONE";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_AVATAR = 1;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_AVATAR"] = 1] = "CHANGE_HP_SUB_AVATAR";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_MONSTER = 2;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_MONSTER"] = 2] = "CHANGE_HP_SUB_MONSTER";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_GEAR = 3;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_GEAR"] = 3] = "CHANGE_HP_SUB_GEAR";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_ENVIR = 4;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_ENVIR"] = 4] = "CHANGE_HP_SUB_ENVIR";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_FALL = 5;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_FALL"] = 5] = "CHANGE_HP_SUB_FALL";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_DRAWN = 6;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_DRAWN"] = 6] = "CHANGE_HP_SUB_DRAWN";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_ABYSS = 7;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_ABYSS"] = 7] = "CHANGE_HP_SUB_ABYSS";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_ABILITY = 8;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_ABILITY"] = 8] = "CHANGE_HP_SUB_ABILITY";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_SUMMON = 9;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_SUMMON"] = 9] = "CHANGE_HP_SUB_SUMMON";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_SCRIPT = 10;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_SCRIPT"] = 10] = "CHANGE_HP_SUB_SCRIPT";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_GM = 11;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_GM"] = 11] = "CHANGE_HP_SUB_GM";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_KILL_SELF = 12;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_KILL_SELF"] = 12] = "CHANGE_HP_SUB_KILL_SELF";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_CLIMATE_COLD = 13;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_CLIMATE_COLD"] = 13] = "CHANGE_HP_SUB_CLIMATE_COLD";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_STORM_LIGHTNING = 14;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_STORM_LIGHTNING"] = 14] = "CHANGE_HP_SUB_STORM_LIGHTNING";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_KILL_SERVER_GADGET = 15;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_KILL_SERVER_GADGET"] = 15] = "CHANGE_HP_SUB_KILL_SERVER_GADGET";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_REPLACE = 16;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_REPLACE"] = 16] = "CHANGE_HP_SUB_REPLACE";
    /**
     * @generated from protobuf enum value: CHANGE_HP_SUB_PLAYER_LEAVE = 17;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_SUB_PLAYER_LEAVE"] = 17] = "CHANGE_HP_SUB_PLAYER_LEAVE";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ATTACK_BY_ENERGY = 18;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ATTACK_BY_ENERGY"] = 18] = "CHANGE_HP_ATTACK_BY_ENERGY";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ATTACK_BY_RECYCLE = 19;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ATTACK_BY_RECYCLE"] = 19] = "CHANGE_HP_ATTACK_BY_RECYCLE";
    /**
     * @generated from protobuf enum value: CHANGE_HP_BY_LUA = 51;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_BY_LUA"] = 51] = "CHANGE_HP_BY_LUA";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_ABILITY = 101;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_ABILITY"] = 101] = "CHANGE_HP_ADD_ABILITY";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_ITEM = 102;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_ITEM"] = 102] = "CHANGE_HP_ADD_ITEM";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_REVIVE = 103;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_REVIVE"] = 103] = "CHANGE_HP_ADD_REVIVE";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_UPGRADE = 104;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_UPGRADE"] = 104] = "CHANGE_HP_ADD_UPGRADE";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_STATUE = 105;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_STATUE"] = 105] = "CHANGE_HP_ADD_STATUE";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_BACKGROUND = 106;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_BACKGROUND"] = 106] = "CHANGE_HP_ADD_BACKGROUND";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_GM = 107;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_GM"] = 107] = "CHANGE_HP_ADD_GM";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_TRIAL_AVATAR_ACTIVITY = 108;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_TRIAL_AVATAR_ACTIVITY"] = 108] = "CHANGE_HP_ADD_TRIAL_AVATAR_ACTIVITY";
    /**
     * @generated from protobuf enum value: CHANGE_HP_ADD_ROUGUELIKE_SPRING = 109;
     */
    ChangHpReason[ChangHpReason["CHANGE_HP_ADD_ROUGUELIKE_SPRING"] = 109] = "CHANGE_HP_ADD_ROUGUELIKE_SPRING";
})(ChangHpReason = exports.ChangHpReason || (exports.ChangHpReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerDieType
 */
var PlayerDieType;
(function (PlayerDieType) {
    /**
     * @generated from protobuf enum value: PLAYER_DIE_NONE = 0;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_NONE"] = 0] = "PLAYER_DIE_NONE";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_KILL_BY_MONSTER = 1;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_KILL_BY_MONSTER"] = 1] = "PLAYER_DIE_KILL_BY_MONSTER";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_KILL_BY_GEAR = 2;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_KILL_BY_GEAR"] = 2] = "PLAYER_DIE_KILL_BY_GEAR";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_FALL = 3;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_FALL"] = 3] = "PLAYER_DIE_FALL";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_DRAWN = 4;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_DRAWN"] = 4] = "PLAYER_DIE_DRAWN";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_ABYSS = 5;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_ABYSS"] = 5] = "PLAYER_DIE_ABYSS";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_GM = 6;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_GM"] = 6] = "PLAYER_DIE_GM";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_CLIMATE_COLD = 7;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_CLIMATE_COLD"] = 7] = "PLAYER_DIE_CLIMATE_COLD";
    /**
     * @generated from protobuf enum value: PLAYER_DIE_STORM_LIGHTING = 8;
     */
    PlayerDieType[PlayerDieType["PLAYER_DIE_STORM_LIGHTING"] = 8] = "PLAYER_DIE_STORM_LIGHTING";
})(PlayerDieType = exports.PlayerDieType || (exports.PlayerDieType = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerDieOption
 */
var PlayerDieOption;
(function (PlayerDieOption) {
    /**
     * @generated from protobuf enum value: DIE_OPT_NONE = 0;
     */
    PlayerDieOption[PlayerDieOption["DIE_OPT_NONE"] = 0] = "DIE_OPT_NONE";
    /**
     * @generated from protobuf enum value: DIE_OPT_REPLAY = 1;
     */
    PlayerDieOption[PlayerDieOption["DIE_OPT_REPLAY"] = 1] = "DIE_OPT_REPLAY";
    /**
     * @generated from protobuf enum value: DIE_OPT_CANCEL = 2;
     */
    PlayerDieOption[PlayerDieOption["DIE_OPT_CANCEL"] = 2] = "DIE_OPT_CANCEL";
    /**
     * @generated from protobuf enum value: DIE_OPT_REVIVE = 3;
     */
    PlayerDieOption[PlayerDieOption["DIE_OPT_REVIVE"] = 3] = "DIE_OPT_REVIVE";
})(PlayerDieOption = exports.PlayerDieOption || (exports.PlayerDieOption = {}));
/**
 * @generated from protobuf enum com.midnights.game.FetterState
 */
var FetterState;
(function (FetterState) {
    /**
     * @generated from protobuf enum value: FETTER_STATE_NONE = 0;
     */
    FetterState[FetterState["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: FETTER_STATE_NOT_OPEN = 1;
     */
    FetterState[FetterState["NOT_OPEN"] = 1] = "NOT_OPEN";
    /**
     * @generated from protobuf enum value: FETTER_STATE_OPEN = 2;
     */
    FetterState[FetterState["OPEN"] = 2] = "OPEN";
    /**
     * @generated from protobuf enum value: FETTER_STATE_FINISH = 3;
     */
    FetterState[FetterState["FINISH"] = 3] = "FINISH";
    /**
     * @generated from protobuf enum value: FETTER_STATE_CONCEAL = 4;
     */
    FetterState[FetterState["CONCEAL"] = 4] = "CONCEAL";
})(FetterState = exports.FetterState || (exports.FetterState = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionState
 */
var AvatarExpeditionState;
(function (AvatarExpeditionState) {
    /**
     * @generated from protobuf enum value: AVATAR_EXPEDITION_NONE = 0;
     */
    AvatarExpeditionState[AvatarExpeditionState["AVATAR_EXPEDITION_NONE"] = 0] = "AVATAR_EXPEDITION_NONE";
    /**
     * @generated from protobuf enum value: AVATAR_EXPEDITION_DOING = 1;
     */
    AvatarExpeditionState[AvatarExpeditionState["AVATAR_EXPEDITION_DOING"] = 1] = "AVATAR_EXPEDITION_DOING";
    /**
     * @generated from protobuf enum value: AVATAR_EXPEDITION_FINISH_WAIT_REWARD = 2;
     */
    AvatarExpeditionState[AvatarExpeditionState["AVATAR_EXPEDITION_FINISH_WAIT_REWARD"] = 2] = "AVATAR_EXPEDITION_FINISH_WAIT_REWARD";
    /**
     * @generated from protobuf enum value: AVATAR_EXPEDITION_CALLBACK_WAIT_REWARD = 3;
     */
    AvatarExpeditionState[AvatarExpeditionState["AVATAR_EXPEDITION_CALLBACK_WAIT_REWARD"] = 3] = "AVATAR_EXPEDITION_CALLBACK_WAIT_REWARD";
    /**
     * @generated from protobuf enum value: AVATAR_EXPEDITION_LOCKED = 4;
     */
    AvatarExpeditionState[AvatarExpeditionState["AVATAR_EXPEDITION_LOCKED"] = 4] = "AVATAR_EXPEDITION_LOCKED";
})(AvatarExpeditionState = exports.AvatarExpeditionState || (exports.AvatarExpeditionState = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarType
 */
var AvatarType;
(function (AvatarType) {
    /**
     * @generated from protobuf enum value: AVATAR_TYPE_NONE = 0;
     */
    AvatarType[AvatarType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: AVATAR_TYPE_FORMAL = 1;
     */
    AvatarType[AvatarType["FORMAL"] = 1] = "FORMAL";
    /**
     * @generated from protobuf enum value: AVATAR_TYPE_TRIAL = 2;
     */
    AvatarType[AvatarType["TRIAL"] = 2] = "TRIAL";
    /**
     * @generated from protobuf enum value: AVATAR_TYPE_MIRROR = 3;
     */
    AvatarType[AvatarType["MIRROR"] = 3] = "MIRROR";
})(AvatarType = exports.AvatarType || (exports.AvatarType = {}));
/**
 * @generated from protobuf enum com.midnights.game.EventTriggerType
 */
var EventTriggerType;
(function (EventTriggerType) {
    /**
     * @generated from protobuf enum value: EVENT_TRIGGER_NONE = 0;
     */
    EventTriggerType[EventTriggerType["EVENT_TRIGGER_NONE"] = 0] = "EVENT_TRIGGER_NONE";
    /**
     * @generated from protobuf enum value: EVENT_TRIGGER_ENTER_FORCE = 1;
     */
    EventTriggerType[EventTriggerType["EVENT_TRIGGER_ENTER_FORCE"] = 1] = "EVENT_TRIGGER_ENTER_FORCE";
})(EventTriggerType = exports.EventTriggerType || (exports.EventTriggerType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MailCollectState
 */
var MailCollectState;
(function (MailCollectState) {
    /**
     * @generated from protobuf enum value: MAIL_COLLECTIBLE_UNKONW = 0;
     */
    MailCollectState[MailCollectState["MAIL_COLLECTIBLE_UNKONW"] = 0] = "MAIL_COLLECTIBLE_UNKONW";
    /**
     * @generated from protobuf enum value: MAIL_NOT_COLLECTIBLE = 1;
     */
    MailCollectState[MailCollectState["MAIL_NOT_COLLECTIBLE"] = 1] = "MAIL_NOT_COLLECTIBLE";
    /**
     * @generated from protobuf enum value: MAIL_COLLECTIBLE_UNCOLLECTED = 2;
     */
    MailCollectState[MailCollectState["MAIL_COLLECTIBLE_UNCOLLECTED"] = 2] = "MAIL_COLLECTIBLE_UNCOLLECTED";
    /**
     * @generated from protobuf enum value: MAIL_COLLECTIBLE_COLLECTED = 3;
     */
    MailCollectState[MailCollectState["MAIL_COLLECTIBLE_COLLECTED"] = 3] = "MAIL_COLLECTIBLE_COLLECTED";
})(MailCollectState = exports.MailCollectState || (exports.MailCollectState = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpSettingType
 */
var MpSettingType;
(function (MpSettingType) {
    /**
     * @generated from protobuf enum value: MP_SETTING_NO_ENTER = 0;
     */
    MpSettingType[MpSettingType["MP_SETTING_NO_ENTER"] = 0] = "MP_SETTING_NO_ENTER";
    /**
     * @generated from protobuf enum value: MP_SETTING_ENTER_FREELY = 1;
     */
    MpSettingType[MpSettingType["MP_SETTING_ENTER_FREELY"] = 1] = "MP_SETTING_ENTER_FREELY";
    /**
     * @generated from protobuf enum value: MP_SETTING_ENTER_AFTER_APPLY = 2;
     */
    MpSettingType[MpSettingType["MP_SETTING_ENTER_AFTER_APPLY"] = 2] = "MP_SETTING_ENTER_AFTER_APPLY";
})(MpSettingType = exports.MpSettingType || (exports.MpSettingType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MathExpressionType
 */
var MathExpressionType;
(function (MathExpressionType) {
    /**
     * @generated from protobuf enum value: MATH_EXPR_NONE = 0;
     */
    MathExpressionType[MathExpressionType["MATH_EXPR_NONE"] = 0] = "MATH_EXPR_NONE";
    /**
     * @generated from protobuf enum value: MATH_EXPR_LEVEL = 1;
     */
    MathExpressionType[MathExpressionType["MATH_EXPR_LEVEL"] = 1] = "MATH_EXPR_LEVEL";
    /**
     * @generated from protobuf enum value: MATH_EXPR_REGISTER_TIME = 2;
     */
    MathExpressionType[MathExpressionType["MATH_EXPR_REGISTER_TIME"] = 2] = "MATH_EXPR_REGISTER_TIME";
    /**
     * @generated from protobuf enum value: MATH_EXPR_LAST_LOGIN_TIME = 3;
     */
    MathExpressionType[MathExpressionType["MATH_EXPR_LAST_LOGIN_TIME"] = 3] = "MATH_EXPR_LAST_LOGIN_TIME";
    /**
     * @generated from protobuf enum value: MATH_EXPR_TOTAL_LOGIN_DAYS = 4;
     */
    MathExpressionType[MathExpressionType["MATH_EXPR_TOTAL_LOGIN_DAYS"] = 4] = "MATH_EXPR_TOTAL_LOGIN_DAYS";
    /**
     * @generated from protobuf enum value: MATH_EXPR_PLATFORM = 5;
     */
    MathExpressionType[MathExpressionType["MATH_EXPR_PLATFORM"] = 5] = "MATH_EXPR_PLATFORM";
})(MathExpressionType = exports.MathExpressionType || (exports.MathExpressionType = {}));
/**
 * @generated from protobuf enum com.midnights.game.LoginRewardConfigType
 */
var LoginRewardConfigType;
(function (LoginRewardConfigType) {
    /**
     * @generated from protobuf enum value: LOGIN_REWARD_IMMEDIDATE = 0;
     */
    LoginRewardConfigType[LoginRewardConfigType["LOGIN_REWARD_IMMEDIDATE"] = 0] = "LOGIN_REWARD_IMMEDIDATE";
    /**
     * @generated from protobuf enum value: LOGIN_REWARD_FIRST = 1;
     */
    LoginRewardConfigType[LoginRewardConfigType["LOGIN_REWARD_FIRST"] = 1] = "LOGIN_REWARD_FIRST";
})(LoginRewardConfigType = exports.LoginRewardConfigType || (exports.LoginRewardConfigType = {}));
/**
 * @generated from protobuf enum com.midnights.game.LanguageType
 */
var LanguageType;
(function (LanguageType) {
    /**
     * @generated from protobuf enum value: LANGUAGE_NONE = 0;
     */
    LanguageType[LanguageType["LANGUAGE_NONE"] = 0] = "LANGUAGE_NONE";
    /**
     * @generated from protobuf enum value: LANGUAGE_EN = 1;
     */
    LanguageType[LanguageType["LANGUAGE_EN"] = 1] = "LANGUAGE_EN";
    /**
     * @generated from protobuf enum value: LANGUAGE_SC = 2;
     */
    LanguageType[LanguageType["LANGUAGE_SC"] = 2] = "LANGUAGE_SC";
    /**
     * @generated from protobuf enum value: LANGUAGE_TC = 3;
     */
    LanguageType[LanguageType["LANGUAGE_TC"] = 3] = "LANGUAGE_TC";
    /**
     * @generated from protobuf enum value: LANGUAGE_FR = 4;
     */
    LanguageType[LanguageType["LANGUAGE_FR"] = 4] = "LANGUAGE_FR";
    /**
     * @generated from protobuf enum value: LANGUAGE_DE = 5;
     */
    LanguageType[LanguageType["LANGUAGE_DE"] = 5] = "LANGUAGE_DE";
    /**
     * @generated from protobuf enum value: LANGUAGE_ES = 6;
     */
    LanguageType[LanguageType["LANGUAGE_ES"] = 6] = "LANGUAGE_ES";
    /**
     * @generated from protobuf enum value: LANGUAGE_PT = 7;
     */
    LanguageType[LanguageType["LANGUAGE_PT"] = 7] = "LANGUAGE_PT";
    /**
     * @generated from protobuf enum value: LANGUAGE_RU = 8;
     */
    LanguageType[LanguageType["LANGUAGE_RU"] = 8] = "LANGUAGE_RU";
    /**
     * @generated from protobuf enum value: LANGUAGE_JP = 9;
     */
    LanguageType[LanguageType["LANGUAGE_JP"] = 9] = "LANGUAGE_JP";
    /**
     * @generated from protobuf enum value: LANGUAGE_KR = 10;
     */
    LanguageType[LanguageType["LANGUAGE_KR"] = 10] = "LANGUAGE_KR";
    /**
     * @generated from protobuf enum value: LANGUAGE_TH = 11;
     */
    LanguageType[LanguageType["LANGUAGE_TH"] = 11] = "LANGUAGE_TH";
    /**
     * @generated from protobuf enum value: LANGUAGE_VN = 12;
     */
    LanguageType[LanguageType["LANGUAGE_VN"] = 12] = "LANGUAGE_VN";
    /**
     * @generated from protobuf enum value: LANGUAGE_ID = 13;
     */
    LanguageType[LanguageType["LANGUAGE_ID"] = 13] = "LANGUAGE_ID";
    /**
     * @generated from protobuf enum value: LANGUAGE_TR = 14;
     */
    LanguageType[LanguageType["LANGUAGE_TR"] = 14] = "LANGUAGE_TR";
    /**
     * @generated from protobuf enum value: LANGUAGE_IT = 15;
     */
    LanguageType[LanguageType["LANGUAGE_IT"] = 15] = "LANGUAGE_IT";
})(LanguageType = exports.LanguageType || (exports.LanguageType = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlatformType
 */
var PlatformType;
(function (PlatformType) {
    /**
     * @generated from protobuf enum value: EDITOR = 0;
     */
    PlatformType[PlatformType["EDITOR"] = 0] = "EDITOR";
    /**
     * @generated from protobuf enum value: IOS = 1;
     */
    PlatformType[PlatformType["IOS"] = 1] = "IOS";
    /**
     * @generated from protobuf enum value: ANDROID = 2;
     */
    PlatformType[PlatformType["ANDROID"] = 2] = "ANDROID";
    /**
     * @generated from protobuf enum value: PC = 3;
     */
    PlatformType[PlatformType["PC"] = 3] = "PC";
    /**
     * @generated from protobuf enum value: PS4 = 4;
     */
    PlatformType[PlatformType["PS4"] = 4] = "PS4";
    /**
     * @generated from protobuf enum value: SERVER = 5;
     */
    PlatformType[PlatformType["SERVER"] = 5] = "SERVER";
    /**
     * @generated from protobuf enum value: CLOUD_ANDROID = 6;
     */
    PlatformType[PlatformType["CLOUD_ANDROID"] = 6] = "CLOUD_ANDROID";
    /**
     * @generated from protobuf enum value: CLOUD_IOS = 7;
     */
    PlatformType[PlatformType["CLOUD_IOS"] = 7] = "CLOUD_IOS";
    /**
     * @generated from protobuf enum value: PS5 = 8;
     */
    PlatformType[PlatformType["PS5"] = 8] = "PS5";
    /**
     * @generated from protobuf enum value: CLOUD_WEB = 9;
     */
    PlatformType[PlatformType["CLOUD_WEB"] = 9] = "CLOUD_WEB";
    /**
     * @generated from protobuf enum value: CLOUD_TV = 10;
     */
    PlatformType[PlatformType["CLOUD_TV"] = 10] = "CLOUD_TV";
    /**
     * @generated from protobuf enum value: CLOUD_MAC = 11;
     */
    PlatformType[PlatformType["CLOUD_MAC"] = 11] = "CLOUD_MAC";
    /**
     * @generated from protobuf enum value: CLOUD_PC = 12;
     */
    PlatformType[PlatformType["CLOUD_PC"] = 12] = "CLOUD_PC";
    /**
     * @generated from protobuf enum value: CLOUD_THIRD_PARTY_MOBILE = 13;
     */
    PlatformType[PlatformType["CLOUD_THIRD_PARTY_MOBILE"] = 13] = "CLOUD_THIRD_PARTY_MOBILE";
    /**
     * @generated from protobuf enum value: CLOUD_THIRD_PARTY_PC = 14;
     */
    PlatformType[PlatformType["CLOUD_THIRD_PARTY_PC"] = 14] = "CLOUD_THIRD_PARTY_PC";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MapMarkPointType
 */
var MapMarkPointType;
(function (MapMarkPointType) {
    /**
     * @generated from protobuf enum value: NPC = 0;
     */
    MapMarkPointType[MapMarkPointType["NPC"] = 0] = "NPC";
    /**
     * @generated from protobuf enum value: QUEST = 1;
     */
    MapMarkPointType[MapMarkPointType["QUEST"] = 1] = "QUEST";
    /**
     * @generated from protobuf enum value: SPECIAL = 2;
     */
    MapMarkPointType[MapMarkPointType["SPECIAL"] = 2] = "SPECIAL";
    /**
     * @generated from protobuf enum value: MINE = 3;
     */
    MapMarkPointType[MapMarkPointType["MINE"] = 3] = "MINE";
    /**
     * @generated from protobuf enum value: COLLECTION = 4;
     */
    MapMarkPointType[MapMarkPointType["COLLECTION"] = 4] = "COLLECTION";
    /**
     * @generated from protobuf enum value: MONSTER = 5;
     */
    MapMarkPointType[MapMarkPointType["MONSTER"] = 5] = "MONSTER";
    /**
     * @generated from protobuf enum value: FISH_POOL = 6;
     */
    MapMarkPointType[MapMarkPointType["FISH_POOL"] = 6] = "FISH_POOL";
})(MapMarkPointType = exports.MapMarkPointType || (exports.MapMarkPointType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MapMarkFromType
 */
var MapMarkFromType;
(function (MapMarkFromType) {
    /**
     * @generated from protobuf enum value: MAP_MARK_FROM_TYPE_NOE = 0;
     */
    MapMarkFromType[MapMarkFromType["NOE"] = 0] = "NOE";
    /**
     * @generated from protobuf enum value: MAP_MARK_FROM_TYPE_MONSTER = 1;
     */
    MapMarkFromType[MapMarkFromType["MONSTER"] = 1] = "MONSTER";
    /**
     * @generated from protobuf enum value: MAP_MARK_FROM_TYPE_QUEST = 2;
     */
    MapMarkFromType[MapMarkFromType["QUEST"] = 2] = "QUEST";
})(MapMarkFromType = exports.MapMarkFromType || (exports.MapMarkFromType = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamInviteState
 */
var DungeonCandidateTeamInviteState;
(function (DungeonCandidateTeamInviteState) {
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TEAM_INVITE_STATE_NONE = 0;
     */
    DungeonCandidateTeamInviteState[DungeonCandidateTeamInviteState["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TEAM_INVITE_STATE_SEND = 1;
     */
    DungeonCandidateTeamInviteState[DungeonCandidateTeamInviteState["SEND"] = 1] = "SEND";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TEAM_INVITE_STATE_ACCEPT = 2;
     */
    DungeonCandidateTeamInviteState[DungeonCandidateTeamInviteState["ACCEPT"] = 2] = "ACCEPT";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TEAM_INVITE_STATE_REFUSE = 3;
     */
    DungeonCandidateTeamInviteState[DungeonCandidateTeamInviteState["REFUSE"] = 3] = "REFUSE";
})(DungeonCandidateTeamInviteState = exports.DungeonCandidateTeamInviteState || (exports.DungeonCandidateTeamInviteState = {}));
/**
 * @generated from protobuf enum com.midnights.game.MonsterGuestBanDrop
 */
var MonsterGuestBanDrop;
(function (MonsterGuestBanDrop) {
    /**
     * @generated from protobuf enum value: MONSTER_GUEST_BAN_NONE = 0;
     */
    MonsterGuestBanDrop[MonsterGuestBanDrop["MONSTER_GUEST_BAN_NONE"] = 0] = "MONSTER_GUEST_BAN_NONE";
    /**
     * @generated from protobuf enum value: MONSTER_GUEST_BAN_DIE_EXP = 1;
     */
    MonsterGuestBanDrop[MonsterGuestBanDrop["MONSTER_GUEST_BAN_DIE_EXP"] = 1] = "MONSTER_GUEST_BAN_DIE_EXP";
    /**
     * @generated from protobuf enum value: MONSTER_GUEST_BAN_DIE_LUA = 2;
     */
    MonsterGuestBanDrop[MonsterGuestBanDrop["MONSTER_GUEST_BAN_DIE_LUA"] = 2] = "MONSTER_GUEST_BAN_DIE_LUA";
    /**
     * @generated from protobuf enum value: MONSTER_GUEST_BAN_DIE_EXCEL = 4;
     */
    MonsterGuestBanDrop[MonsterGuestBanDrop["MONSTER_GUEST_BAN_DIE_EXCEL"] = 4] = "MONSTER_GUEST_BAN_DIE_EXCEL";
    /**
     * @generated from protobuf enum value: MONSTER_GUEST_BAN_DIE_ACTIVITY = 8;
     */
    MonsterGuestBanDrop[MonsterGuestBanDrop["MONSTER_GUEST_BAN_DIE_ACTIVITY"] = 8] = "MONSTER_GUEST_BAN_DIE_ACTIVITY";
    /**
     * @generated from protobuf enum value: MONSTER_GUEST_BAN_DROP_HP = 16;
     */
    MonsterGuestBanDrop[MonsterGuestBanDrop["MONSTER_GUEST_BAN_DROP_HP"] = 16] = "MONSTER_GUEST_BAN_DROP_HP";
    /**
     * @generated from protobuf enum value: MONSTER_GUEST_BAN_SUBFIELD = 32;
     */
    MonsterGuestBanDrop[MonsterGuestBanDrop["MONSTER_GUEST_BAN_SUBFIELD"] = 32] = "MONSTER_GUEST_BAN_SUBFIELD";
})(MonsterGuestBanDrop = exports.MonsterGuestBanDrop || (exports.MonsterGuestBanDrop = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetGuestBanDrop
 */
var GadgetGuestBanDrop;
(function (GadgetGuestBanDrop) {
    /**
     * @generated from protobuf enum value: GADGET_GUEST_BAN_NONE = 0;
     */
    GadgetGuestBanDrop[GadgetGuestBanDrop["GADGET_GUEST_BAN_NONE"] = 0] = "GADGET_GUEST_BAN_NONE";
    /**
     * @generated from protobuf enum value: GADGET_GUEST_BAN_DIE_LUA = 1;
     */
    GadgetGuestBanDrop[GadgetGuestBanDrop["GADGET_GUEST_BAN_DIE_LUA"] = 1] = "GADGET_GUEST_BAN_DIE_LUA";
    /**
     * @generated from protobuf enum value: GADGET_GUEST_BAN_SUBFIELD = 2;
     */
    GadgetGuestBanDrop[GadgetGuestBanDrop["GADGET_GUEST_BAN_SUBFIELD"] = 2] = "GADGET_GUEST_BAN_SUBFIELD";
})(GadgetGuestBanDrop = exports.GadgetGuestBanDrop || (exports.GadgetGuestBanDrop = {}));
/**
 * @generated from protobuf enum com.midnights.game.GroupLoadStrategy
 */
var GroupLoadStrategy;
(function (GroupLoadStrategy) {
    /**
     * @generated from protobuf enum value: GROUP_LOAD_NONE = 0;
     */
    GroupLoadStrategy[GroupLoadStrategy["GROUP_LOAD_NONE"] = 0] = "GROUP_LOAD_NONE";
    /**
     * @generated from protobuf enum value: GROUP_LOAD_SINGLE = 1;
     */
    GroupLoadStrategy[GroupLoadStrategy["GROUP_LOAD_SINGLE"] = 1] = "GROUP_LOAD_SINGLE";
    /**
     * @generated from protobuf enum value: GROUP_LOAD_MULTI = 2;
     */
    GroupLoadStrategy[GroupLoadStrategy["GROUP_LOAD_MULTI"] = 2] = "GROUP_LOAD_MULTI";
    /**
     * @generated from protobuf enum value: GROUP_LOAD_ALL = 3;
     */
    GroupLoadStrategy[GroupLoadStrategy["GROUP_LOAD_ALL"] = 3] = "GROUP_LOAD_ALL";
})(GroupLoadStrategy = exports.GroupLoadStrategy || (exports.GroupLoadStrategy = {}));
/**
 * @generated from protobuf enum com.midnights.game.MatchType
 */
var MatchType;
(function (MatchType) {
    /**
     * @generated from protobuf enum value: MATCH_TYPE_NONE = 0;
     */
    MatchType[MatchType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: MATCH_TYPE_DUNGEON = 1;
     */
    MatchType[MatchType["DUNGEON"] = 1] = "DUNGEON";
    /**
     * @generated from protobuf enum value: MATCH_TYPE_MP_PLAY = 2;
     */
    MatchType[MatchType["MP_PLAY"] = 2] = "MP_PLAY";
    /**
     * @generated from protobuf enum value: MATCH_TYPE_MECHANICUS = 3;
     */
    MatchType[MatchType["MECHANICUS"] = 3] = "MECHANICUS";
    /**
     * @generated from protobuf enum value: MATCH_TYPE_GENERAL = 4;
     */
    MatchType[MatchType["GENERAL"] = 4] = "GENERAL";
    /**
     * @generated from protobuf enum value: MATCH_TYPE_GCG = 5;
     */
    MatchType[MatchType["GCG"] = 5] = "GCG";
})(MatchType = exports.MatchType || (exports.MatchType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayType
 */
var MpPlayType;
(function (MpPlayType) {
    /**
     * @generated from protobuf enum value: MP_PLAY_NONE = 0;
     */
    MpPlayType[MpPlayType["MP_PLAY_NONE"] = 0] = "MP_PLAY_NONE";
    /**
     * @generated from protobuf enum value: MP_PLAY_DUNGEON = 1;
     */
    MpPlayType[MpPlayType["MP_PLAY_DUNGEON"] = 1] = "MP_PLAY_DUNGEON";
    /**
     * @generated from protobuf enum value: MP_PLAY_CRUCIBLE = 2;
     */
    MpPlayType[MpPlayType["MP_PLAY_CRUCIBLE"] = 2] = "MP_PLAY_CRUCIBLE";
})(MpPlayType = exports.MpPlayType || (exports.MpPlayType = {}));
/**
 * @generated from protobuf enum com.midnights.game.OpActivityType
 */
var OpActivityType;
(function (OpActivityType) {
    /**
     * @generated from protobuf enum value: OP_ACTIVITY_NONE = 0;
     */
    OpActivityType[OpActivityType["OP_ACTIVITY_NONE"] = 0] = "OP_ACTIVITY_NONE";
    /**
     * @generated from protobuf enum value: OP_ACTIVITY_SIGN_IN = 1;
     */
    OpActivityType[OpActivityType["OP_ACTIVITY_SIGN_IN"] = 1] = "OP_ACTIVITY_SIGN_IN";
    /**
     * @generated from protobuf enum value: OP_ACTIVITY_BONUS = 2;
     */
    OpActivityType[OpActivityType["OP_ACTIVITY_BONUS"] = 2] = "OP_ACTIVITY_BONUS";
    /**
     * @generated from protobuf enum value: OP_ACTIVITY_TRAVEL_BUSINESS = 3;
     */
    OpActivityType[OpActivityType["OP_ACTIVITY_TRAVEL_BUSINESS"] = 3] = "OP_ACTIVITY_TRAVEL_BUSINESS";
    /**
     * @generated from protobuf enum value: OP_ACTIVITY_CRUCIBLE = 4;
     */
    OpActivityType[OpActivityType["OP_ACTIVITY_CRUCIBLE"] = 4] = "OP_ACTIVITY_CRUCIBLE";
})(OpActivityType = exports.OpActivityType || (exports.OpActivityType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MatchReason
 */
var MatchReason;
(function (MatchReason) {
    /**
     * @generated from protobuf enum value: MATCH_NONE = 0;
     */
    MatchReason[MatchReason["MATCH_NONE"] = 0] = "MATCH_NONE";
    /**
     * @generated from protobuf enum value: MATCH_FINISH = 1;
     */
    MatchReason[MatchReason["MATCH_FINISH"] = 1] = "MATCH_FINISH";
    /**
     * @generated from protobuf enum value: MATCH_PLAYER_CANCEL = 2;
     */
    MatchReason[MatchReason["MATCH_PLAYER_CANCEL"] = 2] = "MATCH_PLAYER_CANCEL";
    /**
     * @generated from protobuf enum value: MATCH_TIMEOUT = 3;
     */
    MatchReason[MatchReason["MATCH_TIMEOUT"] = 3] = "MATCH_TIMEOUT";
    /**
     * @generated from protobuf enum value: MATCH_PLAYER_CONFIRM = 4;
     */
    MatchReason[MatchReason["MATCH_PLAYER_CONFIRM"] = 4] = "MATCH_PLAYER_CONFIRM";
    /**
     * @generated from protobuf enum value: MATCH_FAILED = 5;
     */
    MatchReason[MatchReason["MATCH_FAILED"] = 5] = "MATCH_FAILED";
    /**
     * @generated from protobuf enum value: MATCH_SYSTEM_ERROR = 6;
     */
    MatchReason[MatchReason["MATCH_SYSTEM_ERROR"] = 6] = "MATCH_SYSTEM_ERROR";
    /**
     * @generated from protobuf enum value: MATCH_INTERRUPTED = 7;
     */
    MatchReason[MatchReason["MATCH_INTERRUPTED"] = 7] = "MATCH_INTERRUPTED";
    /**
     * @generated from protobuf enum value: MATCH_MP_UNAVAILABLE = 8;
     */
    MatchReason[MatchReason["MATCH_MP_UNAVAILABLE"] = 8] = "MATCH_MP_UNAVAILABLE";
    /**
     * @generated from protobuf enum value: MATCH_CONFIRM_TIMEOUT = 9;
     */
    MatchReason[MatchReason["MATCH_CONFIRM_TIMEOUT"] = 9] = "MATCH_CONFIRM_TIMEOUT";
})(MatchReason = exports.MatchReason || (exports.MatchReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.LuaShellNotifyType
 */
var LuaShellNotifyType;
(function (LuaShellNotifyType) {
    /**
     * @generated from protobuf enum value: LUASHELL_NOTIFY = 0;
     */
    LuaShellNotifyType[LuaShellNotifyType["LUASHELL_NOTIFY"] = 0] = "LUASHELL_NOTIFY";
    /**
     * @generated from protobuf enum value: LUASHELL_HIDE = 1;
     */
    LuaShellNotifyType[LuaShellNotifyType["LUASHELL_HIDE"] = 1] = "LUASHELL_HIDE";
})(LuaShellNotifyType = exports.LuaShellNotifyType || (exports.LuaShellNotifyType = {}));
/**
 * @generated from protobuf enum com.midnights.game.LuaShellType
 */
var LuaShellType;
(function (LuaShellType) {
    /**
     * @generated from protobuf enum value: LUASHELL_NONE = 0;
     */
    LuaShellType[LuaShellType["LUASHELL_NONE"] = 0] = "LUASHELL_NONE";
    /**
     * @generated from protobuf enum value: LUASHELL_NORMAL = 1;
     */
    LuaShellType[LuaShellType["LUASHELL_NORMAL"] = 1] = "LUASHELL_NORMAL";
    /**
     * @generated from protobuf enum value: LUASHELL_SECURITY = 2;
     */
    LuaShellType[LuaShellType["LUASHELL_SECURITY"] = 2] = "LUASHELL_SECURITY";
    /**
     * @generated from protobuf enum value: LUASHELL_SHELL_CODE = 3;
     */
    LuaShellType[LuaShellType["LUASHELL_SHELL_CODE"] = 3] = "LUASHELL_SHELL_CODE";
})(LuaShellType = exports.LuaShellType || (exports.LuaShellType = {}));
/**
 * @generated from protobuf enum com.midnights.game.SalesmanStatusType
 */
var SalesmanStatusType;
(function (SalesmanStatusType) {
    /**
     * @generated from protobuf enum value: SALESMAN_STATUS_NONE = 0;
     */
    SalesmanStatusType[SalesmanStatusType["SALESMAN_STATUS_NONE"] = 0] = "SALESMAN_STATUS_NONE";
    /**
     * @generated from protobuf enum value: SALESMAN_STATUS_UNSTARTED = 1;
     */
    SalesmanStatusType[SalesmanStatusType["SALESMAN_STATUS_UNSTARTED"] = 1] = "SALESMAN_STATUS_UNSTARTED";
    /**
     * @generated from protobuf enum value: SALESMAN_STATUS_STARTED = 2;
     */
    SalesmanStatusType[SalesmanStatusType["SALESMAN_STATUS_STARTED"] = 2] = "SALESMAN_STATUS_STARTED";
    /**
     * @generated from protobuf enum value: SALESMAN_STATUS_DELIVERED = 3;
     */
    SalesmanStatusType[SalesmanStatusType["SALESMAN_STATUS_DELIVERED"] = 3] = "SALESMAN_STATUS_DELIVERED";
})(SalesmanStatusType = exports.SalesmanStatusType || (exports.SalesmanStatusType = {}));
/**
 * @generated from protobuf enum com.midnights.game.SecurityCheckType
 */
var SecurityCheckType;
(function (SecurityCheckType) {
    /**
     * @generated from protobuf enum value: SECURITY_CHECK_NONE = 0;
     */
    SecurityCheckType[SecurityCheckType["SECURITY_CHECK_NONE"] = 0] = "SECURITY_CHECK_NONE";
    /**
     * @generated from protobuf enum value: SECURITY_CHECK_LOGIN = 1;
     */
    SecurityCheckType[SecurityCheckType["SECURITY_CHECK_LOGIN"] = 1] = "SECURITY_CHECK_LOGIN";
})(SecurityCheckType = exports.SecurityCheckType || (exports.SecurityCheckType = {}));
/**
 * @generated from protobuf enum com.midnights.game.CodexType
 */
var CodexType;
(function (CodexType) {
    /**
     * @generated from protobuf enum value: CODEX_NONE = 0;
     */
    CodexType[CodexType["CODEX_NONE"] = 0] = "CODEX_NONE";
    /**
     * @generated from protobuf enum value: CODEX_QUEST = 1;
     */
    CodexType[CodexType["CODEX_QUEST"] = 1] = "CODEX_QUEST";
    /**
     * @generated from protobuf enum value: CODEX_WEAPON = 2;
     */
    CodexType[CodexType["CODEX_WEAPON"] = 2] = "CODEX_WEAPON";
    /**
     * @generated from protobuf enum value: CODEX_ANIMAL = 3;
     */
    CodexType[CodexType["CODEX_ANIMAL"] = 3] = "CODEX_ANIMAL";
    /**
     * @generated from protobuf enum value: CODEX_MATERIAL = 4;
     */
    CodexType[CodexType["CODEX_MATERIAL"] = 4] = "CODEX_MATERIAL";
    /**
     * @generated from protobuf enum value: CODEX_BOOKS = 5;
     */
    CodexType[CodexType["CODEX_BOOKS"] = 5] = "CODEX_BOOKS";
    /**
     * @generated from protobuf enum value: CODEX_PUSHTIPS = 6;
     */
    CodexType[CodexType["CODEX_PUSHTIPS"] = 6] = "CODEX_PUSHTIPS";
    /**
     * @generated from protobuf enum value: CODEX_VIEW = 7;
     */
    CodexType[CodexType["CODEX_VIEW"] = 7] = "CODEX_VIEW";
    /**
     * @generated from protobuf enum value: CODEX_RELIQUARY = 8;
     */
    CodexType[CodexType["CODEX_RELIQUARY"] = 8] = "CODEX_RELIQUARY";
})(CodexType = exports.CodexType || (exports.CodexType = {}));
/**
 * @generated from protobuf enum com.midnights.game.SegmentCRCModuleType
 */
var SegmentCRCModuleType;
(function (SegmentCRCModuleType) {
    /**
     * @generated from protobuf enum value: MODULE_NONE = 0;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["MODULE_NONE"] = 0] = "MODULE_NONE";
    /**
     * @generated from protobuf enum value: PC_UNITYPLAYER = 1;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["PC_UNITYPLAYER"] = 1] = "PC_UNITYPLAYER";
    /**
     * @generated from protobuf enum value: PC_USERASSEMBLY = 2;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["PC_USERASSEMBLY"] = 2] = "PC_USERASSEMBLY";
    /**
     * @generated from protobuf enum value: PC_XLUA = 3;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["PC_XLUA"] = 3] = "PC_XLUA";
    /**
     * @generated from protobuf enum value: ANDROID_LIBIL2CPP = 11;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["ANDROID_LIBIL2CPP"] = 11] = "ANDROID_LIBIL2CPP";
    /**
     * @generated from protobuf enum value: ANDROID_LIBUNITY = 12;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["ANDROID_LIBUNITY"] = 12] = "ANDROID_LIBUNITY";
    /**
     * @generated from protobuf enum value: ANDROID_LIBXLUA = 13;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["ANDROID_LIBXLUA"] = 13] = "ANDROID_LIBXLUA";
    /**
     * @generated from protobuf enum value: IOS_HK4E = 21;
     */
    SegmentCRCModuleType[SegmentCRCModuleType["IOS_HK4E"] = 21] = "IOS_HK4E";
})(SegmentCRCModuleType = exports.SegmentCRCModuleType || (exports.SegmentCRCModuleType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExchangeMcoinType
 */
var ExchangeMcoinType;
(function (ExchangeMcoinType) {
    /**
     * @generated from protobuf enum value: EXCHANGEMCOIN_NONE = 0;
     */
    ExchangeMcoinType[ExchangeMcoinType["EXCHANGEMCOIN_NONE"] = 0] = "EXCHANGEMCOIN_NONE";
    /**
     * @generated from protobuf enum value: EXCHANGEMCOIN_PCM_TO_PSN = 1;
     */
    ExchangeMcoinType[ExchangeMcoinType["EXCHANGEMCOIN_PCM_TO_PSN"] = 1] = "EXCHANGEMCOIN_PCM_TO_PSN";
    /**
     * @generated from protobuf enum value: EXCHANGEMCOIN_PSN_TO_PCM = 2;
     */
    ExchangeMcoinType[ExchangeMcoinType["EXCHANGEMCOIN_PSN_TO_PCM"] = 2] = "EXCHANGEMCOIN_PSN_TO_PCM";
})(ExchangeMcoinType = exports.ExchangeMcoinType || (exports.ExchangeMcoinType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExploreType
 */
var ExploreType;
(function (ExploreType) {
    /**
     * @generated from protobuf enum value: EXPLORE_NONE = 0;
     */
    ExploreType[ExploreType["EXPLORE_NONE"] = 0] = "EXPLORE_NONE";
    /**
     * @generated from protobuf enum value: EXPLORE_CRYSTAL = 1;
     */
    ExploreType[ExploreType["EXPLORE_CRYSTAL"] = 1] = "EXPLORE_CRYSTAL";
    /**
     * @generated from protobuf enum value: EXPLORE_CHEST = 2;
     */
    ExploreType[ExploreType["EXPLORE_CHEST"] = 2] = "EXPLORE_CHEST";
    /**
     * @generated from protobuf enum value: EXPLORE_TEMPLE = 3;
     */
    ExploreType[ExploreType["EXPLORE_TEMPLE"] = 3] = "EXPLORE_TEMPLE";
    /**
     * @generated from protobuf enum value: EXPLORE_TELEPORT = 4;
     */
    ExploreType[ExploreType["EXPLORE_TELEPORT"] = 4] = "EXPLORE_TELEPORT";
})(ExploreType = exports.ExploreType || (exports.ExploreType = {}));
/**
 * @generated from protobuf enum com.midnights.game.AsterLittleStageState
 */
var AsterLittleStageState;
(function (AsterLittleStageState) {
    /**
     * @generated from protobuf enum value: ASTER_LITTLE_STAGE_NONE = 0;
     */
    AsterLittleStageState[AsterLittleStageState["ASTER_LITTLE_STAGE_NONE"] = 0] = "ASTER_LITTLE_STAGE_NONE";
    /**
     * @generated from protobuf enum value: ASTER_LITTLE_STAGE_UNSTARTED = 1;
     */
    AsterLittleStageState[AsterLittleStageState["ASTER_LITTLE_STAGE_UNSTARTED"] = 1] = "ASTER_LITTLE_STAGE_UNSTARTED";
    /**
     * @generated from protobuf enum value: ASTER_LITTLE_STAGE_STARTED = 2;
     */
    AsterLittleStageState[AsterLittleStageState["ASTER_LITTLE_STAGE_STARTED"] = 2] = "ASTER_LITTLE_STAGE_STARTED";
    /**
     * @generated from protobuf enum value: ASTER_LITTLE_STAGE_FINISHED = 3;
     */
    AsterLittleStageState[AsterLittleStageState["ASTER_LITTLE_STAGE_FINISHED"] = 3] = "ASTER_LITTLE_STAGE_FINISHED";
})(AsterLittleStageState = exports.AsterLittleStageState || (exports.AsterLittleStageState = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingOfferState
 */
var HuntingOfferState;
(function (HuntingOfferState) {
    /**
     * @generated from protobuf enum value: HUNTING_OFFER_STATE_NONE = 0;
     */
    HuntingOfferState[HuntingOfferState["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: HUNTING_OFFER_STATE_STARTED = 1;
     */
    HuntingOfferState[HuntingOfferState["STARTED"] = 1] = "STARTED";
    /**
     * @generated from protobuf enum value: HUNTING_OFFER_STATE_UNSTARTED = 2;
     */
    HuntingOfferState[HuntingOfferState["UNSTARTED"] = 2] = "UNSTARTED";
    /**
     * @generated from protobuf enum value: HUNTING_OFFER_STATE_SUCC = 3;
     */
    HuntingOfferState[HuntingOfferState["SUCC"] = 3] = "SUCC";
})(HuntingOfferState = exports.HuntingOfferState || (exports.HuntingOfferState = {}));
/**
 * @generated from protobuf enum com.midnights.game.RegionSearchState
 */
var RegionSearchState;
(function (RegionSearchState) {
    /**
     * @generated from protobuf enum value: REGION_SEARCH_NONE = 0;
     */
    RegionSearchState[RegionSearchState["REGION_SEARCH_NONE"] = 0] = "REGION_SEARCH_NONE";
    /**
     * @generated from protobuf enum value: REGION_SEARCH_UNSTARTED = 1;
     */
    RegionSearchState[RegionSearchState["REGION_SEARCH_UNSTARTED"] = 1] = "REGION_SEARCH_UNSTARTED";
    /**
     * @generated from protobuf enum value: REGION_SEARCH_STARTED = 2;
     */
    RegionSearchState[RegionSearchState["REGION_SEARCH_STARTED"] = 2] = "REGION_SEARCH_STARTED";
    /**
     * @generated from protobuf enum value: REGION_SEARCH_WAIT_REWARD = 3;
     */
    RegionSearchState[RegionSearchState["REGION_SEARCH_WAIT_REWARD"] = 3] = "REGION_SEARCH_WAIT_REWARD";
    /**
     * @generated from protobuf enum value: REGION_SEARCH_FINISHED = 4;
     */
    RegionSearchState[RegionSearchState["REGION_SEARCH_FINISHED"] = 4] = "REGION_SEARCH_FINISHED";
})(RegionSearchState = exports.RegionSearchState || (exports.RegionSearchState = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerTag
 */
var PlayerTag;
(function (PlayerTag) {
    /**
     * @generated from protobuf enum value: PLAYER_TAG_NORMAL = 0;
     */
    PlayerTag[PlayerTag["NORMAL"] = 0] = "NORMAL";
    /**
     * @generated from protobuf enum value: PLAYER_TAG_SUB_ACCOUNT = 3;
     */
    PlayerTag[PlayerTag["SUB_ACCOUNT"] = 3] = "SUB_ACCOUNT";
    /**
     * @generated from protobuf enum value: PLAYER_TAG_SUB_ACCOUNT_TRANS_TO_NORMAL = 5;
     */
    PlayerTag[PlayerTag["SUB_ACCOUNT_TRANS_TO_NORMAL"] = 5] = "SUB_ACCOUNT_TRANS_TO_NORMAL";
})(PlayerTag = exports.PlayerTag || (exports.PlayerTag = {}));
/**
 * @generated from protobuf enum com.midnights.game.FeatureBlockType
 */
var FeatureBlockType;
(function (FeatureBlockType) {
    /**
     * @generated from protobuf enum value: FEATURE_BLOCK_TYPE_NONE = 0;
     */
    FeatureBlockType[FeatureBlockType["FEATURE_BLOCK_TYPE_NONE"] = 0] = "FEATURE_BLOCK_TYPE_NONE";
    /**
     * @generated from protobuf enum value: FEATURE_BLOCK_TYPE_CHAT = 1;
     */
    FeatureBlockType[FeatureBlockType["FEATURE_BLOCK_TYPE_CHAT"] = 1] = "FEATURE_BLOCK_TYPE_CHAT";
    /**
     * @generated from protobuf enum value: FEATURE_BLOCK_TYPE_MP = 2;
     */
    FeatureBlockType[FeatureBlockType["FEATURE_BLOCK_TYPE_MP"] = 2] = "FEATURE_BLOCK_TYPE_MP";
    /**
     * @generated from protobuf enum value: FEATRURE_BLOCK_TYPE_CRC = 3;
     */
    FeatureBlockType[FeatureBlockType["FEATRURE_BLOCK_TYPE_CRC"] = 3] = "FEATRURE_BLOCK_TYPE_CRC";
    /**
     * @generated from protobuf enum value: FEATURE_BLOCK_TYPE_HOME = 4;
     */
    FeatureBlockType[FeatureBlockType["FEATURE_BLOCK_TYPE_HOME"] = 4] = "FEATURE_BLOCK_TYPE_HOME";
})(FeatureBlockType = exports.FeatureBlockType || (exports.FeatureBlockType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReportReasonType
 */
var ReportReasonType;
(function (ReportReasonType) {
    /**
     * @generated from protobuf enum value: REPORT_REASON_NONE = 0;
     */
    ReportReasonType[ReportReasonType["REPORT_REASON_NONE"] = 0] = "REPORT_REASON_NONE";
    /**
     * @generated from protobuf enum value: REPORT_REASON_DECEPTIVE_ADS = 1;
     */
    ReportReasonType[ReportReasonType["REPORT_REASON_DECEPTIVE_ADS"] = 1] = "REPORT_REASON_DECEPTIVE_ADS";
    /**
     * @generated from protobuf enum value: REPORT_REASON_ABUSING = 2;
     */
    ReportReasonType[ReportReasonType["REPORT_REASON_ABUSING"] = 2] = "REPORT_REASON_ABUSING";
    /**
     * @generated from protobuf enum value: REPORT_REASON_CHEAT = 3;
     */
    ReportReasonType[ReportReasonType["REPORT_REASON_CHEAT"] = 3] = "REPORT_REASON_CHEAT";
    /**
     * @generated from protobuf enum value: REPORT_REASON_POLITICAL = 4;
     */
    ReportReasonType[ReportReasonType["REPORT_REASON_POLITICAL"] = 4] = "REPORT_REASON_POLITICAL";
    /**
     * @generated from protobuf enum value: REPORT_REASON_OTHER = 5;
     */
    ReportReasonType[ReportReasonType["REPORT_REASON_OTHER"] = 5] = "REPORT_REASON_OTHER";
    /**
     * @generated from protobuf enum value: REPORT_REASON_HOME = 6;
     */
    ReportReasonType[ReportReasonType["REPORT_REASON_HOME"] = 6] = "REPORT_REASON_HOME";
})(ReportReasonType = exports.ReportReasonType || (exports.ReportReasonType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MapMarkTipsType
 */
var MapMarkTipsType;
(function (MapMarkTipsType) {
    /**
     * @generated from protobuf enum value: MARK_TIPS_DUNGEON_ELEMENT_TRIAL = 0;
     */
    MapMarkTipsType[MapMarkTipsType["MARK_TIPS_DUNGEON_ELEMENT_TRIAL"] = 0] = "MARK_TIPS_DUNGEON_ELEMENT_TRIAL";
})(MapMarkTipsType = exports.MapMarkTipsType || (exports.MapMarkTipsType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExpeditionState
 */
var ExpeditionState;
(function (ExpeditionState) {
    /**
     * @generated from protobuf enum value: EXPEDITION_NONE = 0;
     */
    ExpeditionState[ExpeditionState["EXPEDITION_NONE"] = 0] = "EXPEDITION_NONE";
    /**
     * @generated from protobuf enum value: EXPEDITION_STARTED = 1;
     */
    ExpeditionState[ExpeditionState["EXPEDITION_STARTED"] = 1] = "EXPEDITION_STARTED";
    /**
     * @generated from protobuf enum value: EXPEDITION_FINISHED = 2;
     */
    ExpeditionState[ExpeditionState["EXPEDITION_FINISHED"] = 2] = "EXPEDITION_FINISHED";
    /**
     * @generated from protobuf enum value: EXPEDITION_REWARDED = 3;
     */
    ExpeditionState[ExpeditionState["EXPEDITION_REWARDED"] = 3] = "EXPEDITION_REWARDED";
    /**
     * @generated from protobuf enum value: EXPEDITION_LOCKED = 4;
     */
    ExpeditionState[ExpeditionState["EXPEDITION_LOCKED"] = 4] = "EXPEDITION_LOCKED";
})(ExpeditionState = exports.ExpeditionState || (exports.ExpeditionState = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterReason
 */
var EnterReason;
(function (EnterReason) {
    /**
     * @generated from protobuf enum value: ENTER_REASON_NONE = 0;
     */
    EnterReason[EnterReason["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_LOGIN = 1;
     */
    EnterReason[EnterReason["LOGIN"] = 1] = "LOGIN";
    /**
     * @generated from protobuf enum value: ENTER_REASON_DUNGEON_REPLAY = 11;
     */
    EnterReason[EnterReason["DUNGEON_REPLAY"] = 11] = "DUNGEON_REPLAY";
    /**
     * @generated from protobuf enum value: ENTER_REASON_DUNGEON_REVIVE_ON_WAYPOINT = 12;
     */
    EnterReason[EnterReason["DUNGEON_REVIVE_ON_WAYPOINT"] = 12] = "DUNGEON_REVIVE_ON_WAYPOINT";
    /**
     * @generated from protobuf enum value: ENTER_REASON_DUNGEON_ENTER = 13;
     */
    EnterReason[EnterReason["DUNGEON_ENTER"] = 13] = "DUNGEON_ENTER";
    /**
     * @generated from protobuf enum value: ENTER_REASON_DUNGEON_QUIT = 14;
     */
    EnterReason[EnterReason["DUNGEON_QUIT"] = 14] = "DUNGEON_QUIT";
    /**
     * @generated from protobuf enum value: ENTER_REASON_GM = 21;
     */
    EnterReason[EnterReason["GM"] = 21] = "GM";
    /**
     * @generated from protobuf enum value: ENTER_REASON_QUEST_ROLLBACK = 31;
     */
    EnterReason[EnterReason["QUEST_ROLLBACK"] = 31] = "QUEST_ROLLBACK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_REVIVAL = 32;
     */
    EnterReason[EnterReason["REVIVAL"] = 32] = "REVIVAL";
    /**
     * @generated from protobuf enum value: ENTER_REASON_PERSONAL_SCENE = 41;
     */
    EnterReason[EnterReason["PERSONAL_SCENE"] = 41] = "PERSONAL_SCENE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TRANS_POINT = 42;
     */
    EnterReason[EnterReason["TRANS_POINT"] = 42] = "TRANS_POINT";
    /**
     * @generated from protobuf enum value: ENTER_REASON_CLIENT_TRANSMIT = 43;
     */
    EnterReason[EnterReason["CLIENT_TRANSMIT"] = 43] = "CLIENT_TRANSMIT";
    /**
     * @generated from protobuf enum value: ENTER_REASON_FORCE_DRAG_BACK = 44;
     */
    EnterReason[EnterReason["FORCE_DRAG_BACK"] = 44] = "FORCE_DRAG_BACK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TEAM_KICK = 51;
     */
    EnterReason[EnterReason["TEAM_KICK"] = 51] = "TEAM_KICK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TEAM_JOIN = 52;
     */
    EnterReason[EnterReason["TEAM_JOIN"] = 52] = "TEAM_JOIN";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TEAM_BACK = 53;
     */
    EnterReason[EnterReason["TEAM_BACK"] = 53] = "TEAM_BACK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_MUIP = 54;
     */
    EnterReason[EnterReason["MUIP"] = 54] = "MUIP";
    /**
     * @generated from protobuf enum value: ENTER_REASON_DUNGEON_INVITE_ACCEPT = 55;
     */
    EnterReason[EnterReason["DUNGEON_INVITE_ACCEPT"] = 55] = "DUNGEON_INVITE_ACCEPT";
    /**
     * @generated from protobuf enum value: ENTER_REASON_LUA = 56;
     */
    EnterReason[EnterReason["LUA"] = 56] = "LUA";
    /**
     * @generated from protobuf enum value: ENTER_REASON_ACTIVITY_LOAD_TERRAIN = 57;
     */
    EnterReason[EnterReason["ACTIVITY_LOAD_TERRAIN"] = 57] = "ACTIVITY_LOAD_TERRAIN";
    /**
     * @generated from protobuf enum value: ENTER_REASON_HOST_FROM_SINGLE_TO_MP = 58;
     */
    EnterReason[EnterReason["HOST_FROM_SINGLE_TO_MP"] = 58] = "HOST_FROM_SINGLE_TO_MP";
    /**
     * @generated from protobuf enum value: ENTER_REASON_MP_PLAY = 59;
     */
    EnterReason[EnterReason["MP_PLAY"] = 59] = "MP_PLAY";
    /**
     * @generated from protobuf enum value: ENTER_REASON_ANCHOR_POINT = 60;
     */
    EnterReason[EnterReason["ANCHOR_POINT"] = 60] = "ANCHOR_POINT";
    /**
     * @generated from protobuf enum value: ENTER_REASON_LUA_SKIP_UI = 61;
     */
    EnterReason[EnterReason["LUA_SKIP_UI"] = 61] = "LUA_SKIP_UI";
    /**
     * @generated from protobuf enum value: ENTER_REASON_RELOAD_TERRAIN = 62;
     */
    EnterReason[EnterReason["RELOAD_TERRAIN"] = 62] = "RELOAD_TERRAIN";
    /**
     * @generated from protobuf enum value: ENTER_REASON_DRAFT_TRANSFER = 63;
     */
    EnterReason[EnterReason["DRAFT_TRANSFER"] = 63] = "DRAFT_TRANSFER";
    /**
     * @generated from protobuf enum value: ENTER_REASON_ENTER_HOME = 64;
     */
    EnterReason[EnterReason["ENTER_HOME"] = 64] = "ENTER_HOME";
    /**
     * @generated from protobuf enum value: ENTER_REASON_EXIT_HOME = 65;
     */
    EnterReason[EnterReason["EXIT_HOME"] = 65] = "EXIT_HOME";
    /**
     * @generated from protobuf enum value: ENTER_REASON_CHANGE_HOME_MODULE = 66;
     */
    EnterReason[EnterReason["CHANGE_HOME_MODULE"] = 66] = "CHANGE_HOME_MODULE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_GALLERY = 67;
     */
    EnterReason[EnterReason["GALLERY"] = 67] = "GALLERY";
    /**
     * @generated from protobuf enum value: ENTER_REASON_HOME_SCENE_JUMP = 68;
     */
    EnterReason[EnterReason["HOME_SCENE_JUMP"] = 68] = "HOME_SCENE_JUMP";
    /**
     * @generated from protobuf enum value: ENTER_REASON_HIDE_AND_SEEK = 69;
     */
    EnterReason[EnterReason["HIDE_AND_SEEK"] = 69] = "HIDE_AND_SEEK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_SUMMER_TIME_MIST_ZONE = 70;
     */
    EnterReason[EnterReason["SUMMER_TIME_MIST_ZONE"] = 70] = "SUMMER_TIME_MIST_ZONE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_FORCE_QUIT_SCENE = 71;
     */
    EnterReason[EnterReason["FORCE_QUIT_SCENE"] = 71] = "FORCE_QUIT_SCENE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_HERO_COURSE = 72;
     */
    EnterReason[EnterReason["HERO_COURSE"] = 72] = "HERO_COURSE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TRANS_CLIMATE = 73;
     */
    EnterReason[EnterReason["TRANS_CLIMATE"] = 73] = "TRANS_CLIMATE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_SUMMER_TIME_BOAT_RESTART = 74;
     */
    EnterReason[EnterReason["SUMMER_TIME_BOAT_RESTART"] = 74] = "SUMMER_TIME_BOAT_RESTART";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TSURUMI_MIST_CLIMATE = 75;
     */
    EnterReason[EnterReason["TSURUMI_MIST_CLIMATE"] = 75] = "TSURUMI_MIST_CLIMATE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TSURUMI_REGIONAL_MIST_CLIMATE = 76;
     */
    EnterReason[EnterReason["TSURUMI_REGIONAL_MIST_CLIMATE"] = 76] = "TSURUMI_REGIONAL_MIST_CLIMATE";
    /**
     * @generated from protobuf enum value: ENTER_REASON_WINTER_CAMP_RESTART = 77;
     */
    EnterReason[EnterReason["WINTER_CAMP_RESTART"] = 77] = "WINTER_CAMP_RESTART";
    /**
     * @generated from protobuf enum value: ENTER_REASON_TALK_EXEC_TRANSFER = 78;
     */
    EnterReason[EnterReason["TALK_EXEC_TRANSFER"] = 78] = "TALK_EXEC_TRANSFER";
    /**
     * @generated from protobuf enum value: ENTER_REASON_SEALAMP_BOAT_RESTART = 79;
     */
    EnterReason[EnterReason["SEALAMP_BOAT_RESTART"] = 79] = "SEALAMP_BOAT_RESTART";
    /**
     * @generated from protobuf enum value: ENTER_REASON_SEALAMP_BOAT_BACK = 80;
     */
    EnterReason[EnterReason["SEALAMP_BOAT_BACK"] = 80] = "SEALAMP_BOAT_BACK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_CHALLENGE_INTERRUPT_BACK = 81;
     */
    EnterReason[EnterReason["CHALLENGE_INTERRUPT_BACK"] = 81] = "CHALLENGE_INTERRUPT_BACK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_IRODORI_MASTER_TRANSFER = 82;
     */
    EnterReason[EnterReason["IRODORI_MASTER_TRANSFER"] = 82] = "IRODORI_MASTER_TRANSFER";
    /**
     * @generated from protobuf enum value: ENTER_REASON_GALLERY_BACK = 83;
     */
    EnterReason[EnterReason["GALLERY_BACK"] = 83] = "GALLERY_BACK";
    /**
     * @generated from protobuf enum value: ENTER_REASON_SUMMER_TIME_V2_BOAT_RESTART = 84;
     */
    EnterReason[EnterReason["SUMMER_TIME_V2_BOAT_RESTART"] = 84] = "SUMMER_TIME_V2_BOAT_RESTART";
    /**
     * @generated from protobuf enum value: ENTER_REASON_ISLAND_PARTY_GALLERY_START_FAILED = 85;
     */
    EnterReason[EnterReason["ISLAND_PARTY_GALLERY_START_FAILED"] = 85] = "ISLAND_PARTY_GALLERY_START_FAILED";
    /**
     * @generated from protobuf enum value: ENTER_REASON_GRAVEN_INNOCENCE_RACE_RESTART = 86;
     */
    EnterReason[EnterReason["GRAVEN_INNOCENCE_RACE_RESTART"] = 86] = "GRAVEN_INNOCENCE_RACE_RESTART";
    /**
     * @generated from protobuf enum value: ENTER_REASON_VINTAGE_HUNTING_TRANSFER = 87;
     */
    EnterReason[EnterReason["VINTAGE_HUNTING_TRANSFER"] = 87] = "VINTAGE_HUNTING_TRANSFER";
    /**
     * @generated from protobuf enum value: ENTER_REASON_FUNGUS_FIGHTER_TRANSFER = 88;
     */
    EnterReason[EnterReason["FUNGUS_FIGHTER_TRANSFER"] = 88] = "FUNGUS_FIGHTER_TRANSFER";
})(EnterReason = exports.EnterReason || (exports.EnterReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.FriendEnterHomeOption
 */
var FriendEnterHomeOption;
(function (FriendEnterHomeOption) {
    /**
     * @generated from protobuf enum value: FRIEND_ENTER_HOME_OPTION_NEED_CONFIRM = 0;
     */
    FriendEnterHomeOption[FriendEnterHomeOption["NEED_CONFIRM"] = 0] = "NEED_CONFIRM";
    /**
     * @generated from protobuf enum value: FRIEND_ENTER_HOME_OPTION_REFUSE = 1;
     */
    FriendEnterHomeOption[FriendEnterHomeOption["REFUSE"] = 1] = "REFUSE";
    /**
     * @generated from protobuf enum value: FRIEND_ENTER_HOME_OPTION_DIRECT = 2;
     */
    FriendEnterHomeOption[FriendEnterHomeOption["DIRECT"] = 2] = "DIRECT";
})(FriendEnterHomeOption = exports.FriendEnterHomeOption || (exports.FriendEnterHomeOption = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChatChannel
 */
var ChatChannel;
(function (ChatChannel) {
    /**
     * @generated from protobuf enum value: CHANNEL_TEAM = 0;
     */
    ChatChannel[ChatChannel["CHANNEL_TEAM"] = 0] = "CHANNEL_TEAM";
    /**
     * @generated from protobuf enum value: CHANNEL_FRIEND = 1;
     */
    ChatChannel[ChatChannel["CHANNEL_FRIEND"] = 1] = "CHANNEL_FRIEND";
    /**
     * @generated from protobuf enum value: CHANNEL_NONE = 2;
     */
    ChatChannel[ChatChannel["CHANNEL_NONE"] = 2] = "CHANNEL_NONE";
    /**
     * @generated from protobuf enum value: CHANNEL_HIDEANDSEEK = 3;
     */
    ChatChannel[ChatChannel["CHANNEL_HIDEANDSEEK"] = 3] = "CHANNEL_HIDEANDSEEK";
    /**
     * @generated from protobuf enum value: CHANNEL_ALL = 10;
     */
    ChatChannel[ChatChannel["CHANNEL_ALL"] = 10] = "CHANNEL_ALL";
    /**
     * @generated from protobuf enum value: CHANNEL_TEST = 100;
     */
    ChatChannel[ChatChannel["CHANNEL_TEST"] = 100] = "CHANNEL_TEST";
})(ChatChannel = exports.ChatChannel || (exports.ChatChannel = {}));
/**
 * @generated from protobuf enum com.midnights.game.LeaveWorldReason
 */
var LeaveWorldReason;
(function (LeaveWorldReason) {
    /**
     * @generated from protobuf enum value: LEAVE_WORLD_REASON_NONE = 0;
     */
    LeaveWorldReason[LeaveWorldReason["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: LEAVE_WORLD_REASON_LOGOUT = 1;
     */
    LeaveWorldReason[LeaveWorldReason["LOGOUT"] = 1] = "LOGOUT";
    /**
     * @generated from protobuf enum value: LEAVE_WORLD_REASON_BACK_MY_WORLD = 2;
     */
    LeaveWorldReason[LeaveWorldReason["BACK_MY_WORLD"] = 2] = "BACK_MY_WORLD";
    /**
     * @generated from protobuf enum value: LEAVE_WORLD_REASON_KICK_BY_OWNER = 3;
     */
    LeaveWorldReason[LeaveWorldReason["KICK_BY_OWNER"] = 3] = "KICK_BY_OWNER";
})(LeaveWorldReason = exports.LeaveWorldReason || (exports.LeaveWorldReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamPlayerState
 */
var DungeonCandidateTeamPlayerState;
(function (DungeonCandidateTeamPlayerState) {
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TEAM_PLAYER_STATE_IDLE = 0;
     */
    DungeonCandidateTeamPlayerState[DungeonCandidateTeamPlayerState["IDLE"] = 0] = "IDLE";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TEAM_PLAYER_STATE_CHANGING_AVATAR = 1;
     */
    DungeonCandidateTeamPlayerState[DungeonCandidateTeamPlayerState["CHANGING_AVATAR"] = 1] = "CHANGING_AVATAR";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TEAM_PLAYER_STATE_READY = 2;
     */
    DungeonCandidateTeamPlayerState[DungeonCandidateTeamPlayerState["READY"] = 2] = "READY";
})(DungeonCandidateTeamPlayerState = exports.DungeonCandidateTeamPlayerState || (exports.DungeonCandidateTeamPlayerState = {}));
/**
 * @generated from protobuf enum com.midnights.game.CreateGadgetReason
 */
var CreateGadgetReason;
(function (CreateGadgetReason) {
    /**
     * @generated from protobuf enum value: CREATE_GADGET_NONE = 0;
     */
    CreateGadgetReason[CreateGadgetReason["CREATE_GADGET_NONE"] = 0] = "CREATE_GADGET_NONE";
    /**
     * @generated from protobuf enum value: CREATE_GADGET_PLAYER = 1;
     */
    CreateGadgetReason[CreateGadgetReason["CREATE_GADGET_PLAYER"] = 1] = "CREATE_GADGET_PLAYER";
    /**
     * @generated from protobuf enum value: CREATE_GADGET_MISSION = 2;
     */
    CreateGadgetReason[CreateGadgetReason["CREATE_GADGET_MISSION"] = 2] = "CREATE_GADGET_MISSION";
    /**
     * @generated from protobuf enum value: CREATE_GADGET_GM = 3;
     */
    CreateGadgetReason[CreateGadgetReason["CREATE_GADGET_GM"] = 3] = "CREATE_GADGET_GM";
})(CreateGadgetReason = exports.CreateGadgetReason || (exports.CreateGadgetReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.LunaRiteHintStatusType
 */
var LunaRiteHintStatusType;
(function (LunaRiteHintStatusType) {
    /**
     * @generated from protobuf enum value: LUNA_RITE_HINT_STATUS_DEFAULT = 0;
     */
    LunaRiteHintStatusType[LunaRiteHintStatusType["LUNA_RITE_HINT_STATUS_DEFAULT"] = 0] = "LUNA_RITE_HINT_STATUS_DEFAULT";
    /**
     * @generated from protobuf enum value: LUNA_RITE_HINT_STATUS_NO_COUNT = 1;
     */
    LunaRiteHintStatusType[LunaRiteHintStatusType["LUNA_RITE_HINT_STATUS_NO_COUNT"] = 1] = "LUNA_RITE_HINT_STATUS_NO_COUNT";
    /**
     * @generated from protobuf enum value: LUNA_RITE_HINT_STATUS_FINISH = 2;
     */
    LunaRiteHintStatusType[LunaRiteHintStatusType["LUNA_RITE_HINT_STATUS_FINISH"] = 2] = "LUNA_RITE_HINT_STATUS_FINISH";
})(LunaRiteHintStatusType = exports.LunaRiteHintStatusType || (exports.LunaRiteHintStatusType = {}));
/**
 * @generated from protobuf enum com.midnights.game.LunaRiteHintPointType
 */
var LunaRiteHintPointType;
(function (LunaRiteHintPointType) {
    /**
     * @generated from protobuf enum value: LUNA_RITE_HINT_TYPE_NONE = 0;
     */
    LunaRiteHintPointType[LunaRiteHintPointType["LUNA_RITE_HINT_TYPE_NONE"] = 0] = "LUNA_RITE_HINT_TYPE_NONE";
    /**
     * @generated from protobuf enum value: LUNA_RITE_HINT_TYPE_RUNE = 1;
     */
    LunaRiteHintPointType[LunaRiteHintPointType["LUNA_RITE_HINT_TYPE_RUNE"] = 1] = "LUNA_RITE_HINT_TYPE_RUNE";
    /**
     * @generated from protobuf enum value: LUNA_RITE_HINT_TYPE_CHEST = 2;
     */
    LunaRiteHintPointType[LunaRiteHintPointType["LUNA_RITE_HINT_TYPE_CHEST"] = 2] = "LUNA_RITE_HINT_TYPE_CHEST";
})(LunaRiteHintPointType = exports.LunaRiteHintPointType || (exports.LunaRiteHintPointType = {}));
/**
 * @generated from protobuf enum com.midnights.game.GroupVariableType
 */
var GroupVariableType;
(function (GroupVariableType) {
    /**
     * @generated from protobuf enum value: VARIABLE_TYPE_NORMAL = 0;
     */
    GroupVariableType[GroupVariableType["VARIABLE_TYPE_NORMAL"] = 0] = "VARIABLE_TYPE_NORMAL";
    /**
     * @generated from protobuf enum value: VARIABLE_TYPE_LOGIC_STATE = 1;
     */
    GroupVariableType[GroupVariableType["VARIABLE_TYPE_LOGIC_STATE"] = 1] = "VARIABLE_TYPE_LOGIC_STATE";
})(GroupVariableType = exports.GroupVariableType || (exports.GroupVariableType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientInputType
 */
var ClientInputType;
(function (ClientInputType) {
    /**
     * @generated from protobuf enum value: CLIENT_INPUT_NONE = 0;
     */
    ClientInputType[ClientInputType["CLIENT_INPUT_NONE"] = 0] = "CLIENT_INPUT_NONE";
    /**
     * @generated from protobuf enum value: CLIENT_INPUT_KEYBORD_MOUSE = 1;
     */
    ClientInputType[ClientInputType["CLIENT_INPUT_KEYBORD_MOUSE"] = 1] = "CLIENT_INPUT_KEYBORD_MOUSE";
    /**
     * @generated from protobuf enum value: CLIENT_INPUT_GAMEPAD = 2;
     */
    ClientInputType[ClientInputType["CLIENT_INPUT_GAMEPAD"] = 2] = "CLIENT_INPUT_GAMEPAD";
    /**
     * @generated from protobuf enum value: CLIENT_INPUT_TOUCH_PANEL = 3;
     */
    ClientInputType[ClientInputType["CLIENT_INPUT_TOUCH_PANEL"] = 3] = "CLIENT_INPUT_TOUCH_PANEL";
})(ClientInputType = exports.ClientInputType || (exports.ClientInputType = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonEvent
 */
var CustomDungeonEvent;
(function (CustomDungeonEvent) {
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_EVENT_NONE = 0;
     */
    CustomDungeonEvent[CustomDungeonEvent["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_EVENT_OFFICIAL_RESTART = 1;
     */
    CustomDungeonEvent[CustomDungeonEvent["OFFICIAL_RESTART"] = 1] = "OFFICIAL_RESTART";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_EVENT_OUT_STUCK = 2;
     */
    CustomDungeonEvent[CustomDungeonEvent["OUT_STUCK"] = 2] = "OUT_STUCK";
})(CustomDungeonEvent = exports.CustomDungeonEvent || (exports.CustomDungeonEvent = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlatformCategory
 */
var PlatformCategory;
(function (PlatformCategory) {
    /**
     * @generated from protobuf enum value: PLATFORM_CATEGORY_NONE = 0;
     */
    PlatformCategory[PlatformCategory["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: PLATFORM_CATEGORY_PCM = 1;
     */
    PlatformCategory[PlatformCategory["PCM"] = 1] = "PCM";
    /**
     * @generated from protobuf enum value: PLATFORM_CATEGORY_PSN = 2;
     */
    PlatformCategory[PlatformCategory["PSN"] = 2] = "PSN";
})(PlatformCategory = exports.PlatformCategory || (exports.PlatformCategory = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneidConstValue
 */
var SceneidConstValue;
(function (SceneidConstValue) {
    /**
     * @generated from protobuf enum value: SCENEID_CONST_NONE = 0;
     */
    SceneidConstValue[SceneidConstValue["SCENEID_CONST_NONE"] = 0] = "SCENEID_CONST_NONE";
    /**
     * @generated from protobuf enum value: SCENEID_CONST_MAIN = 3;
     */
    SceneidConstValue[SceneidConstValue["SCENEID_CONST_MAIN"] = 3] = "SCENEID_CONST_MAIN";
    /**
     * @generated from protobuf enum value: SCENEID_CONST_ISLAND = 4;
     */
    SceneidConstValue[SceneidConstValue["SCENEID_CONST_ISLAND"] = 4] = "SCENEID_CONST_ISLAND";
    /**
     * @generated from protobuf enum value: SCENEID_CONST_ENKANOMIYA = 5;
     */
    SceneidConstValue[SceneidConstValue["SCENEID_CONST_ENKANOMIYA"] = 5] = "SCENEID_CONST_ENKANOMIYA";
    /**
     * @generated from protobuf enum value: SCENEID_CONST_MICHIAE_MATSURI = 7;
     */
    SceneidConstValue[SceneidConstValue["SCENEID_CONST_MICHIAE_MATSURI"] = 7] = "SCENEID_CONST_MICHIAE_MATSURI";
    /**
     * @generated from protobuf enum value: SCENEID_CONST_28_ISLAND = 9;
     */
    SceneidConstValue[SceneidConstValue["SCENEID_CONST_28_ISLAND"] = 9] = "SCENEID_CONST_28_ISLAND";
})(SceneidConstValue = exports.SceneidConstValue || (exports.SceneidConstValue = {}));
/**
 * @generated from protobuf enum com.midnights.game.CityidConstValue
 */
var CityidConstValue;
(function (CityidConstValue) {
    /**
     * @generated from protobuf enum value: CITYID_CONST_NONE = 0;
     */
    CityidConstValue[CityidConstValue["CITYID_CONST_NONE"] = 0] = "CITYID_CONST_NONE";
    /**
     * @generated from protobuf enum value: CITYID_CONST_MENGDE = 1;
     */
    CityidConstValue[CityidConstValue["CITYID_CONST_MENGDE"] = 1] = "CITYID_CONST_MENGDE";
    /**
     * @generated from protobuf enum value: CITYID_CONST_LIYUE = 2;
     */
    CityidConstValue[CityidConstValue["CITYID_CONST_LIYUE"] = 2] = "CITYID_CONST_LIYUE";
    /**
     * @generated from protobuf enum value: CITYID_CONST_DAOQI = 3;
     */
    CityidConstValue[CityidConstValue["CITYID_CONST_DAOQI"] = 3] = "CITYID_CONST_DAOQI";
    /**
     * @generated from protobuf enum value: CITYID_CONST_XUMI = 4;
     */
    CityidConstValue[CityidConstValue["CITYID_CONST_XUMI"] = 4] = "CITYID_CONST_XUMI";
})(CityidConstValue = exports.CityidConstValue || (exports.CityidConstValue = {}));
/**
 * @generated from protobuf enum com.midnights.game.AranaraCollectionState
 */
var AranaraCollectionState;
(function (AranaraCollectionState) {
    /**
     * @generated from protobuf enum value: ARANARA_COLLECTION_STATE_NONE = 0;
     */
    AranaraCollectionState[AranaraCollectionState["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ARANARA_COLLECTION_STATE_COLLECTABLE = 1;
     */
    AranaraCollectionState[AranaraCollectionState["COLLECTABLE"] = 1] = "COLLECTABLE";
    /**
     * @generated from protobuf enum value: ARANARA_COLLECTION_STATE_COLLECTED = 2;
     */
    AranaraCollectionState[AranaraCollectionState["COLLECTED"] = 2] = "COLLECTED";
    /**
     * @generated from protobuf enum value: ARANARA_COLLECTION_STATE_FINISHED = 3;
     */
    AranaraCollectionState[AranaraCollectionState["FINISHED"] = 3] = "FINISHED";
})(AranaraCollectionState = exports.AranaraCollectionState || (exports.AranaraCollectionState = {}));
/**
 * @generated from protobuf enum com.midnights.game.AuditState
 */
var AuditState;
(function (AuditState) {
    /**
     * @generated from protobuf enum value: AUDIT_NONE = 0;
     */
    AuditState[AuditState["AUDIT_NONE"] = 0] = "AUDIT_NONE";
    /**
     * @generated from protobuf enum value: AUDIT_WAITING = 1;
     */
    AuditState[AuditState["AUDIT_WAITING"] = 1] = "AUDIT_WAITING";
    /**
     * @generated from protobuf enum value: AUDIT_FAILED = 2;
     */
    AuditState[AuditState["AUDIT_FAILED"] = 2] = "AUDIT_FAILED";
})(AuditState = exports.AuditState || (exports.AuditState = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ParamList$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ParamList", [
            { no: 1, name: "param_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 param_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 param_list = 1; */
        for (let i = 0; i < message.paramList.length; i++)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.paramList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ParamList
 */
exports.ParamList = new ParamList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PropValue$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PropValue", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "val", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "ival", kind: "scalar", oneof: "value", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "fval", kind: "scalar", oneof: "value", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { value: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 type */ 1:
                    message.type = reader.uint32();
                    break;
                case /* optional int64 val */ 4:
                    message.val = reader.int64().toBigInt();
                    break;
                case /* int64 ival */ 2:
                    message.value = {
                        oneofKind: "ival",
                        ival: reader.int64().toBigInt()
                    };
                    break;
                case /* float fval */ 3:
                    message.value = {
                        oneofKind: "fval",
                        fval: reader.float()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.type);
        /* optional int64 val = 4; */
        if (message.val !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int64(message.val);
        /* int64 ival = 2; */
        if (message.value.oneofKind === "ival")
            writer.tag(2, runtime_2.WireType.Varint).int64(message.value.ival);
        /* float fval = 3; */
        if (message.value.oneofKind === "fval")
            writer.tag(3, runtime_2.WireType.Bit32).float(message.value.fval);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PropValue
 */
exports.PropValue = new PropValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Uint32Pair$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Uint32Pair", [
            { no: 1, name: "key", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 key */ 1:
                    message.key = reader.uint32();
                    break;
                case /* optional uint32 value */ 2:
                    message.value = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 key = 1; */
        if (message.key !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.key);
        /* optional uint32 value = 2; */
        if (message.value !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Uint32Pair
 */
exports.Uint32Pair = new Uint32Pair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegionSimpleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionSimpleInfo", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "title", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "dispatch_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional string title */ 2:
                    message.title = reader.string();
                    break;
                case /* optional string type */ 3:
                    message.type = reader.string();
                    break;
                case /* optional string dispatch_url */ 4:
                    message.dispatchUrl = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.name);
        /* optional string title = 2; */
        if (message.title !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.title);
        /* optional string type = 3; */
        if (message.type !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.type);
        /* optional string dispatch_url = 4; */
        if (message.dispatchUrl !== undefined)
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.dispatchUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionSimpleInfo
 */
exports.RegionSimpleInfo = new RegionSimpleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryRegionListHttpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryRegionListHttpRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "region_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.RegionSimpleInfo },
            { no: 5, name: "client_secret_key", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "client_custom_config_encrypted", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 7, name: "enable_login_pc", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { regionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.RegionSimpleInfo region_list */ 2:
                    message.regionList.push(exports.RegionSimpleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bytes client_secret_key */ 5:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* optional bytes client_custom_config_encrypted */ 6:
                    message.clientCustomConfigEncrypted = reader.bytes();
                    break;
                case /* optional bool enable_login_pc */ 7:
                    message.enableLoginPc = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.RegionSimpleInfo region_list = 2; */
        for (let i = 0; i < message.regionList.length; i++)
            exports.RegionSimpleInfo.internalBinaryWrite(message.regionList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bytes client_secret_key = 5; */
        if (message.clientSecretKey !== undefined)
            writer.tag(5, runtime_2.WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* optional bytes client_custom_config_encrypted = 6; */
        if (message.clientCustomConfigEncrypted !== undefined)
            writer.tag(6, runtime_2.WireType.LengthDelimited).bytes(message.clientCustomConfigEncrypted);
        /* optional bool enable_login_pc = 7; */
        if (message.enableLoginPc !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.enableLoginPc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryRegionListHttpRsp
 */
exports.QueryRegionListHttpRsp = new QueryRegionListHttpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForceUpdateInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForceUpdateInfo", [
            { no: 1, name: "force_update_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string force_update_url */ 1:
                    message.forceUpdateUrl = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string force_update_url = 1; */
        if (message.forceUpdateUrl !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.forceUpdateUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForceUpdateInfo
 */
exports.ForceUpdateInfo = new ForceUpdateInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StopServerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StopServerInfo", [
            { no: 1, name: "stop_begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "stop_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "content_msg", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 stop_begin_time */ 1:
                    message.stopBeginTime = reader.uint32();
                    break;
                case /* optional uint32 stop_end_time */ 2:
                    message.stopEndTime = reader.uint32();
                    break;
                case /* optional string url */ 3:
                    message.url = reader.string();
                    break;
                case /* optional string content_msg */ 4:
                    message.contentMsg = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 stop_begin_time = 1; */
        if (message.stopBeginTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.stopBeginTime);
        /* optional uint32 stop_end_time = 2; */
        if (message.stopEndTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.stopEndTime);
        /* optional string url = 3; */
        if (message.url !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.url);
        /* optional string content_msg = 4; */
        if (message.contentMsg !== undefined)
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.contentMsg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StopServerInfo
 */
exports.StopServerInfo = new StopServerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResVersionConfig$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ResVersionConfig", [
            { no: 1, name: "version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "relogin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "release_total_size", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "branch", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "next_script_version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 version */ 1:
                    message.version = reader.uint32();
                    break;
                case /* optional bool relogin */ 2:
                    message.relogin = reader.bool();
                    break;
                case /* optional string md5 */ 3:
                    message.md5 = reader.string();
                    break;
                case /* optional string release_total_size */ 4:
                    message.releaseTotalSize = reader.string();
                    break;
                case /* optional string version_suffix */ 5:
                    message.versionSuffix = reader.string();
                    break;
                case /* optional string branch */ 6:
                    message.branch = reader.string();
                    break;
                case /* optional string next_script_version */ 7:
                    message.nextScriptVersion = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 version = 1; */
        if (message.version !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.version);
        /* optional bool relogin = 2; */
        if (message.relogin !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.relogin);
        /* optional string md5 = 3; */
        if (message.md5 !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.md5);
        /* optional string release_total_size = 4; */
        if (message.releaseTotalSize !== undefined)
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.releaseTotalSize);
        /* optional string version_suffix = 5; */
        if (message.versionSuffix !== undefined)
            writer.tag(5, runtime_2.WireType.LengthDelimited).string(message.versionSuffix);
        /* optional string branch = 6; */
        if (message.branch !== undefined)
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.branch);
        /* optional string next_script_version = 7; */
        if (message.nextScriptVersion !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.nextScriptVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ResVersionConfig
 */
exports.ResVersionConfig = new ResVersionConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionInfo", [
            { no: 1, name: "gateserver_ip", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "gateserver_port", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "pay_callback_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "area_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "resource_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "data_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "feedback_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "bulletin_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "resource_url_bak", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "data_url_bak", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "client_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "handbook_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 18, name: "client_silence_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "client_data_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 20, name: "client_silence_data_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 22, name: "res_version_config", kind: "message", T: () => exports.ResVersionConfig },
            { no: 23, name: "secret_key", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 24, name: "official_community_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 26, name: "client_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 27, name: "client_silence_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 28, name: "use_gateserver_domain_name", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 29, name: "gateserver_domain_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 30, name: "user_center_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 31, name: "account_bind_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 32, name: "cdkey_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 33, name: "privacy_policy_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 34, name: "next_resource_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 35, name: "next_res_version_config", kind: "message", T: () => exports.ResVersionConfig },
            { no: 36, name: "game_biz", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string gateserver_ip */ 1:
                    message.gateserverIp = reader.string();
                    break;
                case /* optional uint32 gateserver_port */ 2:
                    message.gateserverPort = reader.uint32();
                    break;
                case /* optional string pay_callback_url */ 3:
                    message.payCallbackUrl = reader.string();
                    break;
                case /* optional string area_type */ 7:
                    message.areaType = reader.string();
                    break;
                case /* optional string resource_url */ 8:
                    message.resourceUrl = reader.string();
                    break;
                case /* optional string data_url */ 9:
                    message.dataUrl = reader.string();
                    break;
                case /* optional string feedback_url */ 10:
                    message.feedbackUrl = reader.string();
                    break;
                case /* optional string bulletin_url */ 11:
                    message.bulletinUrl = reader.string();
                    break;
                case /* optional string resource_url_bak */ 12:
                    message.resourceUrlBak = reader.string();
                    break;
                case /* optional string data_url_bak */ 13:
                    message.dataUrlBak = reader.string();
                    break;
                case /* optional uint32 client_data_version */ 14:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* optional string handbook_url */ 16:
                    message.handbookUrl = reader.string();
                    break;
                case /* optional uint32 client_silence_data_version */ 18:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* optional string client_data_md5 */ 19:
                    message.clientDataMd5 = reader.string();
                    break;
                case /* optional string client_silence_data_md5 */ 20:
                    message.clientSilenceDataMd5 = reader.string();
                    break;
                case /* optional com.midnights.game.ResVersionConfig res_version_config */ 22:
                    message.resVersionConfig = exports.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
                    break;
                case /* optional bytes secret_key */ 23:
                    message.secretKey = reader.bytes();
                    break;
                case /* optional string official_community_url */ 24:
                    message.officialCommunityUrl = reader.string();
                    break;
                case /* optional string client_version_suffix */ 26:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* optional string client_silence_version_suffix */ 27:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* optional bool use_gateserver_domain_name */ 28:
                    message.useGateserverDomainName = reader.bool();
                    break;
                case /* optional string gateserver_domain_name */ 29:
                    message.gateserverDomainName = reader.string();
                    break;
                case /* optional string user_center_url */ 30:
                    message.userCenterUrl = reader.string();
                    break;
                case /* optional string account_bind_url */ 31:
                    message.accountBindUrl = reader.string();
                    break;
                case /* optional string cdkey_url */ 32:
                    message.cdkeyUrl = reader.string();
                    break;
                case /* optional string privacy_policy_url */ 33:
                    message.privacyPolicyUrl = reader.string();
                    break;
                case /* optional string next_resource_url */ 34:
                    message.nextResourceUrl = reader.string();
                    break;
                case /* optional com.midnights.game.ResVersionConfig next_res_version_config */ 35:
                    message.nextResVersionConfig = exports.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
                    break;
                case /* optional string game_biz */ 36:
                    message.gameBiz = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string gateserver_ip = 1; */
        if (message.gateserverIp !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.gateserverIp);
        /* optional uint32 gateserver_port = 2; */
        if (message.gateserverPort !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.gateserverPort);
        /* optional string pay_callback_url = 3; */
        if (message.payCallbackUrl !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.payCallbackUrl);
        /* optional string area_type = 7; */
        if (message.areaType !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.areaType);
        /* optional string resource_url = 8; */
        if (message.resourceUrl !== undefined)
            writer.tag(8, runtime_2.WireType.LengthDelimited).string(message.resourceUrl);
        /* optional string data_url = 9; */
        if (message.dataUrl !== undefined)
            writer.tag(9, runtime_2.WireType.LengthDelimited).string(message.dataUrl);
        /* optional string feedback_url = 10; */
        if (message.feedbackUrl !== undefined)
            writer.tag(10, runtime_2.WireType.LengthDelimited).string(message.feedbackUrl);
        /* optional string bulletin_url = 11; */
        if (message.bulletinUrl !== undefined)
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.bulletinUrl);
        /* optional string resource_url_bak = 12; */
        if (message.resourceUrlBak !== undefined)
            writer.tag(12, runtime_2.WireType.LengthDelimited).string(message.resourceUrlBak);
        /* optional string data_url_bak = 13; */
        if (message.dataUrlBak !== undefined)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.dataUrlBak);
        /* optional uint32 client_data_version = 14; */
        if (message.clientDataVersion !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.clientDataVersion);
        /* optional string handbook_url = 16; */
        if (message.handbookUrl !== undefined)
            writer.tag(16, runtime_2.WireType.LengthDelimited).string(message.handbookUrl);
        /* optional uint32 client_silence_data_version = 18; */
        if (message.clientSilenceDataVersion !== undefined)
            writer.tag(18, runtime_2.WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* optional string client_data_md5 = 19; */
        if (message.clientDataMd5 !== undefined)
            writer.tag(19, runtime_2.WireType.LengthDelimited).string(message.clientDataMd5);
        /* optional string client_silence_data_md5 = 20; */
        if (message.clientSilenceDataMd5 !== undefined)
            writer.tag(20, runtime_2.WireType.LengthDelimited).string(message.clientSilenceDataMd5);
        /* optional com.midnights.game.ResVersionConfig res_version_config = 22; */
        if (message.resVersionConfig)
            exports.ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(22, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bytes secret_key = 23; */
        if (message.secretKey !== undefined)
            writer.tag(23, runtime_2.WireType.LengthDelimited).bytes(message.secretKey);
        /* optional string official_community_url = 24; */
        if (message.officialCommunityUrl !== undefined)
            writer.tag(24, runtime_2.WireType.LengthDelimited).string(message.officialCommunityUrl);
        /* optional string client_version_suffix = 26; */
        if (message.clientVersionSuffix !== undefined)
            writer.tag(26, runtime_2.WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* optional string client_silence_version_suffix = 27; */
        if (message.clientSilenceVersionSuffix !== undefined)
            writer.tag(27, runtime_2.WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* optional bool use_gateserver_domain_name = 28; */
        if (message.useGateserverDomainName !== undefined)
            writer.tag(28, runtime_2.WireType.Varint).bool(message.useGateserverDomainName);
        /* optional string gateserver_domain_name = 29; */
        if (message.gateserverDomainName !== undefined)
            writer.tag(29, runtime_2.WireType.LengthDelimited).string(message.gateserverDomainName);
        /* optional string user_center_url = 30; */
        if (message.userCenterUrl !== undefined)
            writer.tag(30, runtime_2.WireType.LengthDelimited).string(message.userCenterUrl);
        /* optional string account_bind_url = 31; */
        if (message.accountBindUrl !== undefined)
            writer.tag(31, runtime_2.WireType.LengthDelimited).string(message.accountBindUrl);
        /* optional string cdkey_url = 32; */
        if (message.cdkeyUrl !== undefined)
            writer.tag(32, runtime_2.WireType.LengthDelimited).string(message.cdkeyUrl);
        /* optional string privacy_policy_url = 33; */
        if (message.privacyPolicyUrl !== undefined)
            writer.tag(33, runtime_2.WireType.LengthDelimited).string(message.privacyPolicyUrl);
        /* optional string next_resource_url = 34; */
        if (message.nextResourceUrl !== undefined)
            writer.tag(34, runtime_2.WireType.LengthDelimited).string(message.nextResourceUrl);
        /* optional com.midnights.game.ResVersionConfig next_res_version_config = 35; */
        if (message.nextResVersionConfig)
            exports.ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(35, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional string game_biz = 36; */
        if (message.gameBiz !== undefined)
            writer.tag(36, runtime_2.WireType.LengthDelimited).string(message.gameBiz);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionInfo
 */
exports.RegionInfo = new RegionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryCurrRegionHttpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryCurrRegionHttpRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "msg", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "region_info", kind: "message", T: () => exports.RegionInfo },
            { no: 11, name: "client_secret_key", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "region_custom_config_encrypted", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "client_region_custom_config_encrypted", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "force_udpate", kind: "message", oneof: "detail", T: () => exports.ForceUpdateInfo },
            { no: 5, name: "stop_server", kind: "message", oneof: "detail", T: () => exports.StopServerInfo }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* optional string msg */ 2:
                    message.msg = reader.string();
                    break;
                case /* optional com.midnights.game.RegionInfo region_info */ 3:
                    message.regionInfo = exports.RegionInfo.internalBinaryRead(reader, reader.uint32(), options, message.regionInfo);
                    break;
                case /* optional bytes client_secret_key */ 11:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* optional bytes region_custom_config_encrypted */ 12:
                    message.regionCustomConfigEncrypted = reader.bytes();
                    break;
                case /* optional bytes client_region_custom_config_encrypted */ 13:
                    message.clientRegionCustomConfigEncrypted = reader.bytes();
                    break;
                case /* com.midnights.game.ForceUpdateInfo force_udpate */ 4:
                    message.detail = {
                        oneofKind: "forceUdpate",
                        forceUdpate: exports.ForceUpdateInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.forceUdpate)
                    };
                    break;
                case /* com.midnights.game.StopServerInfo stop_server */ 5:
                    message.detail = {
                        oneofKind: "stopServer",
                        stopServer: exports.StopServerInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.stopServer)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional string msg = 2; */
        if (message.msg !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.msg);
        /* optional com.midnights.game.RegionInfo region_info = 3; */
        if (message.regionInfo)
            exports.RegionInfo.internalBinaryWrite(message.regionInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bytes client_secret_key = 11; */
        if (message.clientSecretKey !== undefined)
            writer.tag(11, runtime_2.WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* optional bytes region_custom_config_encrypted = 12; */
        if (message.regionCustomConfigEncrypted !== undefined)
            writer.tag(12, runtime_2.WireType.LengthDelimited).bytes(message.regionCustomConfigEncrypted);
        /* optional bytes client_region_custom_config_encrypted = 13; */
        if (message.clientRegionCustomConfigEncrypted !== undefined)
            writer.tag(13, runtime_2.WireType.LengthDelimited).bytes(message.clientRegionCustomConfigEncrypted);
        /* com.midnights.game.ForceUpdateInfo force_udpate = 4; */
        if (message.detail.oneofKind === "forceUdpate")
            exports.ForceUpdateInfo.internalBinaryWrite(message.detail.forceUdpate, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.StopServerInfo stop_server = 5; */
        if (message.detail.oneofKind === "stopServer")
            exports.StopServerInfo.internalBinaryWrite(message.detail.stopServer, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryCurrRegionHttpRsp
 */
exports.QueryCurrRegionHttpRsp = new QueryCurrRegionHttpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerUidExtInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerUidExtInfo", [
            { no: 1, name: "reg_platform", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 reg_platform */ 1:
                    message.regPlatform = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 reg_platform = 1; */
        if (message.regPlatform !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.regPlatform);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerUidExtInfo
 */
exports.PlayerUidExtInfo = new PlayerUidExtInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Reliquary$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Reliquary", [
            { no: 1, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "main_prop_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "append_prop_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { appendPropIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level */ 1:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 exp */ 2:
                    message.exp = reader.uint32();
                    break;
                case /* optional uint32 promote_level */ 3:
                    message.promoteLevel = reader.uint32();
                    break;
                case /* optional uint32 main_prop_id */ 4:
                    message.mainPropId = reader.uint32();
                    break;
                case /* repeated uint32 append_prop_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.appendPropIdList.push(reader.uint32());
                    else
                        message.appendPropIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level = 1; */
        if (message.level !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 exp = 2; */
        if (message.exp !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.exp);
        /* optional uint32 promote_level = 3; */
        if (message.promoteLevel !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.promoteLevel);
        /* optional uint32 main_prop_id = 4; */
        if (message.mainPropId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.mainPropId);
        /* repeated uint32 append_prop_id_list = 5; */
        for (let i = 0; i < message.appendPropIdList.length; i++)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.appendPropIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Reliquary
 */
exports.Reliquary = new Reliquary$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Weapon$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Weapon", [
            { no: 1, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "affix_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { affixMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level */ 1:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 exp */ 2:
                    message.exp = reader.uint32();
                    break;
                case /* optional uint32 promote_level */ 3:
                    message.promoteLevel = reader.uint32();
                    break;
                case /* map<uint32, uint32> affix_map */ 4:
                    this.binaryReadMap4(message.affixMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.Weapon.affix_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level = 1; */
        if (message.level !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 exp = 2; */
        if (message.exp !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.exp);
        /* optional uint32 promote_level = 3; */
        if (message.promoteLevel !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.promoteLevel);
        /* map<uint32, uint32> affix_map = 4; */
        for (let k of Object.keys(message.affixMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.affixMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Weapon
 */
exports.Weapon = new Weapon$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MaterialDeleteInfo", [
            { no: 1, name: "has_delete_config", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "count_down_delete", kind: "message", oneof: "deleteInfo", T: () => exports.MaterialDeleteInfo_CountDownDelete },
            { no: 3, name: "date_delete", kind: "message", oneof: "deleteInfo", T: () => exports.MaterialDeleteInfo_DateTimeDelete },
            { no: 4, name: "delay_week_count_down_delete", kind: "message", oneof: "deleteInfo", T: () => exports.MaterialDeleteInfo_DelayWeekCountDownDelete }
        ]);
    }
    create(value) {
        const message = { deleteInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool has_delete_config */ 1:
                    message.hasDeleteConfig = reader.bool();
                    break;
                case /* com.midnights.game.MaterialDeleteInfo.CountDownDelete count_down_delete */ 2:
                    message.deleteInfo = {
                        oneofKind: "countDownDelete",
                        countDownDelete: exports.MaterialDeleteInfo_CountDownDelete.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo.countDownDelete)
                    };
                    break;
                case /* com.midnights.game.MaterialDeleteInfo.DateTimeDelete date_delete */ 3:
                    message.deleteInfo = {
                        oneofKind: "dateDelete",
                        dateDelete: exports.MaterialDeleteInfo_DateTimeDelete.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo.dateDelete)
                    };
                    break;
                case /* com.midnights.game.MaterialDeleteInfo.DelayWeekCountDownDelete delay_week_count_down_delete */ 4:
                    message.deleteInfo = {
                        oneofKind: "delayWeekCountDownDelete",
                        delayWeekCountDownDelete: exports.MaterialDeleteInfo_DelayWeekCountDownDelete.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo.delayWeekCountDownDelete)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool has_delete_config = 1; */
        if (message.hasDeleteConfig !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.hasDeleteConfig);
        /* com.midnights.game.MaterialDeleteInfo.CountDownDelete count_down_delete = 2; */
        if (message.deleteInfo.oneofKind === "countDownDelete")
            exports.MaterialDeleteInfo_CountDownDelete.internalBinaryWrite(message.deleteInfo.countDownDelete, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MaterialDeleteInfo.DateTimeDelete date_delete = 3; */
        if (message.deleteInfo.oneofKind === "dateDelete")
            exports.MaterialDeleteInfo_DateTimeDelete.internalBinaryWrite(message.deleteInfo.dateDelete, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MaterialDeleteInfo.DelayWeekCountDownDelete delay_week_count_down_delete = 4; */
        if (message.deleteInfo.oneofKind === "delayWeekCountDownDelete")
            exports.MaterialDeleteInfo_DelayWeekCountDownDelete.internalBinaryWrite(message.deleteInfo.delayWeekCountDownDelete, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MaterialDeleteInfo
 */
exports.MaterialDeleteInfo = new MaterialDeleteInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_CountDownDelete$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MaterialDeleteInfo.CountDownDelete", [
            { no: 1, name: "delete_time_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "config_count_down_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { deleteTimeNumMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> delete_time_num_map */ 1:
                    this.binaryReadMap1(message.deleteTimeNumMap, reader, options);
                    break;
                case /* optional uint32 config_count_down_time */ 2:
                    message.configCountDownTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MaterialDeleteInfo.CountDownDelete.delete_time_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> delete_time_num_map = 1; */
        for (let k of Object.keys(message.deleteTimeNumMap))
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.deleteTimeNumMap[k]).join();
        /* optional uint32 config_count_down_time = 2; */
        if (message.configCountDownTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.configCountDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MaterialDeleteInfo.CountDownDelete
 */
exports.MaterialDeleteInfo_CountDownDelete = new MaterialDeleteInfo_CountDownDelete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_DateTimeDelete$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MaterialDeleteInfo.DateTimeDelete", [
            { no: 1, name: "delete_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 delete_time */ 1:
                    message.deleteTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 delete_time = 1; */
        if (message.deleteTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.deleteTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MaterialDeleteInfo.DateTimeDelete
 */
exports.MaterialDeleteInfo_DateTimeDelete = new MaterialDeleteInfo_DateTimeDelete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_DelayWeekCountDownDelete$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MaterialDeleteInfo.DelayWeekCountDownDelete", [
            { no: 1, name: "delete_time_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "config_delay_week", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_count_down_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { deleteTimeNumMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> delete_time_num_map */ 1:
                    this.binaryReadMap1(message.deleteTimeNumMap, reader, options);
                    break;
                case /* optional uint32 config_delay_week */ 2:
                    message.configDelayWeek = reader.uint32();
                    break;
                case /* optional uint32 config_count_down_time */ 3:
                    message.configCountDownTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MaterialDeleteInfo.DelayWeekCountDownDelete.delete_time_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> delete_time_num_map = 1; */
        for (let k of Object.keys(message.deleteTimeNumMap))
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.deleteTimeNumMap[k]).join();
        /* optional uint32 config_delay_week = 2; */
        if (message.configDelayWeek !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.configDelayWeek);
        /* optional uint32 config_count_down_time = 3; */
        if (message.configCountDownTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.configCountDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MaterialDeleteInfo.DelayWeekCountDownDelete
 */
exports.MaterialDeleteInfo_DelayWeekCountDownDelete = new MaterialDeleteInfo_DelayWeekCountDownDelete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Material$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Material", [
            { no: 1, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "delete_info", kind: "message", T: () => exports.MaterialDeleteInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 count */ 1:
                    message.count = reader.uint32();
                    break;
                case /* optional com.midnights.game.MaterialDeleteInfo delete_info */ 2:
                    message.deleteInfo = exports.MaterialDeleteInfo.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 count = 1; */
        if (message.count !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.count);
        /* optional com.midnights.game.MaterialDeleteInfo delete_info = 2; */
        if (message.deleteInfo)
            exports.MaterialDeleteInfo.internalBinaryWrite(message.deleteInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Material
 */
exports.Material = new Material$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Equip$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Equip", [
            { no: 3, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "reliquary", kind: "message", oneof: "detail", T: () => exports.Reliquary },
            { no: 2, name: "weapon", kind: "message", oneof: "detail", T: () => exports.Weapon }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_locked */ 3:
                    message.isLocked = reader.bool();
                    break;
                case /* com.midnights.game.Reliquary reliquary */ 1:
                    message.detail = {
                        oneofKind: "reliquary",
                        reliquary: exports.Reliquary.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquary)
                    };
                    break;
                case /* com.midnights.game.Weapon weapon */ 2:
                    message.detail = {
                        oneofKind: "weapon",
                        weapon: exports.Weapon.internalBinaryRead(reader, reader.uint32(), options, message.detail.weapon)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_locked = 3; */
        if (message.isLocked !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isLocked);
        /* com.midnights.game.Reliquary reliquary = 1; */
        if (message.detail.oneofKind === "reliquary")
            exports.Reliquary.internalBinaryWrite(message.detail.reliquary, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.Weapon weapon = 2; */
        if (message.detail.oneofKind === "weapon")
            exports.Weapon.internalBinaryWrite(message.detail.weapon, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Equip
 */
exports.Equip = new Equip$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Furniture$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Furniture", [
            { no: 1, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 count */ 1:
                    message.count = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 count = 1; */
        if (message.count !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Furniture
 */
exports.Furniture = new Furniture$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Item$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Item", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "material", kind: "message", oneof: "detail", T: () => exports.Material },
            { no: 6, name: "equip", kind: "message", oneof: "detail", T: () => exports.Equip },
            { no: 7, name: "furniture", kind: "message", oneof: "detail", T: () => exports.Furniture }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 2:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* com.midnights.game.Material material */ 5:
                    message.detail = {
                        oneofKind: "material",
                        material: exports.Material.internalBinaryRead(reader, reader.uint32(), options, message.detail.material)
                    };
                    break;
                case /* com.midnights.game.Equip equip */ 6:
                    message.detail = {
                        oneofKind: "equip",
                        equip: exports.Equip.internalBinaryRead(reader, reader.uint32(), options, message.detail.equip)
                    };
                    break;
                case /* com.midnights.game.Furniture furniture */ 7:
                    message.detail = {
                        oneofKind: "furniture",
                        furniture: exports.Furniture.internalBinaryRead(reader, reader.uint32(), options, message.detail.furniture)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.itemId);
        /* optional uint64 guid = 2; */
        if (message.guid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.guid);
        /* com.midnights.game.Material material = 5; */
        if (message.detail.oneofKind === "material")
            exports.Material.internalBinaryWrite(message.detail.material, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.Equip equip = 6; */
        if (message.detail.oneofKind === "equip")
            exports.Equip.internalBinaryWrite(message.detail.equip, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.Furniture furniture = 7; */
        if (message.detail.oneofKind === "furniture")
            exports.Furniture.internalBinaryWrite(message.detail.furniture, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Item
 */
exports.Item = new Item$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemParam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ItemParam", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint32 count */ 2:
                    message.count = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.itemId);
        /* optional uint32 count = 2; */
        if (message.count !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ItemParam
 */
exports.ItemParam = new ItemParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EquipParam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EquipParam", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "item_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "item_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint32 item_num */ 2:
                    message.itemNum = reader.uint32();
                    break;
                case /* optional uint32 item_level */ 3:
                    message.itemLevel = reader.uint32();
                    break;
                case /* optional uint32 promote_level */ 4:
                    message.promoteLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.itemId);
        /* optional uint32 item_num = 2; */
        if (message.itemNum !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.itemNum);
        /* optional uint32 item_level = 3; */
        if (message.itemLevel !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.itemLevel);
        /* optional uint32 promote_level = 4; */
        if (message.promoteLevel !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.promoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EquipParam
 */
exports.EquipParam = new EquipParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EquipParamList$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EquipParamList", [
            { no: 1, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.EquipParam }
        ]);
    }
    create(value) {
        const message = { itemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.EquipParam item_list */ 1:
                    message.itemList.push(exports.EquipParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.EquipParam item_list = 1; */
        for (let i = 0; i < message.itemList.length; i++)
            exports.EquipParam.internalBinaryWrite(message.itemList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EquipParamList
 */
exports.EquipParamList = new EquipParamList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Reward$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Reward", [
            { no: 1, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ItemParam }
        ]);
    }
    create(value) {
        const message = { itemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 reward_id */ 1:
                    message.rewardId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 2:
                    message.itemList.push(exports.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 reward_id = 1; */
        if (message.rewardId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.rewardId);
        /* repeated com.midnights.game.ItemParam item_list = 2; */
        for (let i = 0; i < message.itemList.length; i++)
            exports.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Reward
 */
exports.Reward = new Reward$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityString$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityString", [
            { no: 1, name: "str", kind: "scalar", oneof: "type", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "hash", kind: "scalar", oneof: "type", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string str */ 1:
                    message.type = {
                        oneofKind: "str",
                        str: reader.string()
                    };
                    break;
                case /* uint32 hash */ 2:
                    message.type = {
                        oneofKind: "hash",
                        hash: reader.uint32()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string str = 1; */
        if (message.type.oneofKind === "str")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.type.str);
        /* uint32 hash = 2; */
        if (message.type.oneofKind === "hash")
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.type.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityString
 */
exports.AbilityString = new AbilityString$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityFloatValue$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityFloatValue", [
            { no: 1, name: "value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float value */ 1:
                    message.value = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float value = 1; */
        if (message.value !== undefined)
            writer.tag(1, runtime_2.WireType.Bit32).float(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityFloatValue
 */
exports.AbilityFloatValue = new AbilityFloatValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityScalarValueEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityScalarValueEntry", [
            { no: 1, name: "key", kind: "message", T: () => exports.AbilityString },
            { no: 2, name: "value_type", kind: "enum", opt: true, T: () => ["com.midnights.game.AbilityScalarType", AbilityScalarType, "ABILITY_SCALAR_TYPE_"] },
            { no: 3, name: "float_value", kind: "scalar", oneof: "value", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "string_value", kind: "scalar", oneof: "value", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "int_value", kind: "scalar", oneof: "value", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "uint_value", kind: "scalar", oneof: "value", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { value: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityString key */ 1:
                    message.key = exports.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.key);
                    break;
                case /* optional com.midnights.game.AbilityScalarType value_type */ 2:
                    message.valueType = reader.int32();
                    break;
                case /* float float_value */ 3:
                    message.value = {
                        oneofKind: "floatValue",
                        floatValue: reader.float()
                    };
                    break;
                case /* string string_value */ 4:
                    message.value = {
                        oneofKind: "stringValue",
                        stringValue: reader.string()
                    };
                    break;
                case /* int32 int_value */ 5:
                    message.value = {
                        oneofKind: "intValue",
                        intValue: reader.int32()
                    };
                    break;
                case /* uint32 uint_value */ 6:
                    message.value = {
                        oneofKind: "uintValue",
                        uintValue: reader.uint32()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilityString key = 1; */
        if (message.key)
            exports.AbilityString.internalBinaryWrite(message.key, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityScalarType value_type = 2; */
        if (message.valueType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.valueType);
        /* float float_value = 3; */
        if (message.value.oneofKind === "floatValue")
            writer.tag(3, runtime_2.WireType.Bit32).float(message.value.floatValue);
        /* string string_value = 4; */
        if (message.value.oneofKind === "stringValue")
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.value.stringValue);
        /* int32 int_value = 5; */
        if (message.value.oneofKind === "intValue")
            writer.tag(5, runtime_2.WireType.Varint).int32(message.value.intValue);
        /* uint32 uint_value = 6; */
        if (message.value.oneofKind === "uintValue")
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.value.uintValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityScalarValueEntry
 */
exports.AbilityScalarValueEntry = new AbilityScalarValueEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityAppliedAbility$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityAppliedAbility", [
            { no: 1, name: "ability_name", kind: "message", T: () => exports.AbilityString },
            { no: 2, name: "ability_override", kind: "message", T: () => exports.AbilityString },
            { no: 3, name: "override_map", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityScalarValueEntry },
            { no: 4, name: "instanced_ability_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { overrideMap: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityString ability_name */ 1:
                    message.abilityName = exports.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityName);
                    break;
                case /* optional com.midnights.game.AbilityString ability_override */ 2:
                    message.abilityOverride = exports.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityOverride);
                    break;
                case /* repeated com.midnights.game.AbilityScalarValueEntry override_map */ 3:
                    message.overrideMap.push(exports.AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 instanced_ability_id */ 4:
                    message.instancedAbilityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilityString ability_name = 1; */
        if (message.abilityName)
            exports.AbilityString.internalBinaryWrite(message.abilityName, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityString ability_override = 2; */
        if (message.abilityOverride)
            exports.AbilityString.internalBinaryWrite(message.abilityOverride, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AbilityScalarValueEntry override_map = 3; */
        for (let i = 0; i < message.overrideMap.length; i++)
            exports.AbilityScalarValueEntry.internalBinaryWrite(message.overrideMap[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 instanced_ability_id = 4; */
        if (message.instancedAbilityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.instancedAbilityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityAppliedAbility
 */
exports.AbilityAppliedAbility = new AbilityAppliedAbility$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityAttachedModifier$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityAttachedModifier", [
            { no: 1, name: "is_invalid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "attach_name_hash", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_invalid */ 1:
                    message.isInvalid = reader.bool();
                    break;
                case /* optional uint32 owner_entity_id */ 2:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 3:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional bool is_serverbuff_modifier */ 4:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* optional int32 attach_name_hash */ 5:
                    message.attachNameHash = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_invalid = 1; */
        if (message.isInvalid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isInvalid);
        /* optional uint32 owner_entity_id = 2; */
        if (message.ownerEntityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 instanced_modifier_id = 3; */
        if (message.instancedModifierId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.instancedModifierId);
        /* optional bool is_serverbuff_modifier = 4; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isServerbuffModifier);
        /* optional int32 attach_name_hash = 5; */
        if (message.attachNameHash !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.attachNameHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityAttachedModifier
 */
exports.AbilityAttachedModifier = new AbilityAttachedModifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModifierDurability$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ModifierDurability", [
            { no: 1, name: "reduce_ratio", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "remaining_durability", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float reduce_ratio */ 1:
                    message.reduceRatio = reader.float();
                    break;
                case /* optional float remaining_durability */ 2:
                    message.remainingDurability = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float reduce_ratio = 1; */
        if (message.reduceRatio !== undefined)
            writer.tag(1, runtime_2.WireType.Bit32).float(message.reduceRatio);
        /* optional float remaining_durability = 2; */
        if (message.remainingDurability !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.remainingDurability);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ModifierDurability
 */
exports.ModifierDurability = new ModifierDurability$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityAppliedModifier$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityAppliedModifier", [
            { no: 1, name: "modifier_local_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "parent_ability_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "parent_ability_name", kind: "message", T: () => exports.AbilityString },
            { no: 4, name: "parent_ability_override", kind: "message", T: () => exports.AbilityString },
            { no: 5, name: "instanced_ability_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "exist_duration", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "attached_instanced_modifier", kind: "message", T: () => exports.AbilityAttachedModifier },
            { no: 9, name: "apply_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_attached_parent_ability", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "modifier_durability", kind: "message", T: () => exports.ModifierDurability },
            { no: 12, name: "sbuff_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 modifier_local_id */ 1:
                    message.modifierLocalId = reader.int32();
                    break;
                case /* optional uint32 parent_ability_entity_id */ 2:
                    message.parentAbilityEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilityString parent_ability_name */ 3:
                    message.parentAbilityName = exports.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityName);
                    break;
                case /* optional com.midnights.game.AbilityString parent_ability_override */ 4:
                    message.parentAbilityOverride = exports.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityOverride);
                    break;
                case /* optional uint32 instanced_ability_id */ 5:
                    message.instancedAbilityId = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 6:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional float exist_duration */ 7:
                    message.existDuration = reader.float();
                    break;
                case /* optional com.midnights.game.AbilityAttachedModifier attached_instanced_modifier */ 8:
                    message.attachedInstancedModifier = exports.AbilityAttachedModifier.internalBinaryRead(reader, reader.uint32(), options, message.attachedInstancedModifier);
                    break;
                case /* optional uint32 apply_entity_id */ 9:
                    message.applyEntityId = reader.uint32();
                    break;
                case /* optional bool is_attached_parent_ability */ 10:
                    message.isAttachedParentAbility = reader.bool();
                    break;
                case /* optional com.midnights.game.ModifierDurability modifier_durability */ 11:
                    message.modifierDurability = exports.ModifierDurability.internalBinaryRead(reader, reader.uint32(), options, message.modifierDurability);
                    break;
                case /* optional uint32 sbuff_uid */ 12:
                    message.sbuffUid = reader.uint32();
                    break;
                case /* optional bool is_serverbuff_modifier */ 13:
                    message.isServerbuffModifier = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 modifier_local_id = 1; */
        if (message.modifierLocalId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.modifierLocalId);
        /* optional uint32 parent_ability_entity_id = 2; */
        if (message.parentAbilityEntityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.parentAbilityEntityId);
        /* optional com.midnights.game.AbilityString parent_ability_name = 3; */
        if (message.parentAbilityName)
            exports.AbilityString.internalBinaryWrite(message.parentAbilityName, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityString parent_ability_override = 4; */
        if (message.parentAbilityOverride)
            exports.AbilityString.internalBinaryWrite(message.parentAbilityOverride, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 instanced_ability_id = 5; */
        if (message.instancedAbilityId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.instancedAbilityId);
        /* optional uint32 instanced_modifier_id = 6; */
        if (message.instancedModifierId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.instancedModifierId);
        /* optional float exist_duration = 7; */
        if (message.existDuration !== undefined)
            writer.tag(7, runtime_2.WireType.Bit32).float(message.existDuration);
        /* optional com.midnights.game.AbilityAttachedModifier attached_instanced_modifier = 8; */
        if (message.attachedInstancedModifier)
            exports.AbilityAttachedModifier.internalBinaryWrite(message.attachedInstancedModifier, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 apply_entity_id = 9; */
        if (message.applyEntityId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.applyEntityId);
        /* optional bool is_attached_parent_ability = 10; */
        if (message.isAttachedParentAbility !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isAttachedParentAbility);
        /* optional com.midnights.game.ModifierDurability modifier_durability = 11; */
        if (message.modifierDurability)
            exports.ModifierDurability.internalBinaryWrite(message.modifierDurability, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 sbuff_uid = 12; */
        if (message.sbuffUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sbuffUid);
        /* optional bool is_serverbuff_modifier = 13; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isServerbuffModifier);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityAppliedModifier
 */
exports.AbilityAppliedModifier = new AbilityAppliedModifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassivePropParam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassivePropParam", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "reaction_info_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "sync_flag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reactionInfoList: [], paramList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 type */ 1:
                    message.type = reader.int32();
                    break;
                case /* repeated uint32 reaction_info_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.reactionInfoList.push(reader.uint32());
                    else
                        message.reactionInfoList.push(reader.uint32());
                    break;
                case /* repeated float param_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.float());
                    else
                        message.paramList.push(reader.float());
                    break;
                case /* optional uint32 sync_flag */ 4:
                    message.syncFlag = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.type);
        /* repeated uint32 reaction_info_list = 2; */
        for (let i = 0; i < message.reactionInfoList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.reactionInfoList[i]);
        /* repeated float param_list = 3; */
        for (let i = 0; i < message.paramList.length; i++)
            writer.tag(3, runtime_2.WireType.Bit32).float(message.paramList[i]);
        /* optional uint32 sync_flag = 4; */
        if (message.syncFlag !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.syncFlag);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassivePropParam
 */
exports.MassivePropParam = new MassivePropParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassivePropSyncInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassivePropSyncInfo", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "prop_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.MassivePropParam }
        ]);
    }
    create(value) {
        const message = { propList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 id */ 1:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* repeated com.midnights.game.MassivePropParam prop_list */ 2:
                    message.propList.push(exports.MassivePropParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int64 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int64(message.id);
        /* repeated com.midnights.game.MassivePropParam prop_list = 2; */
        for (let i = 0; i < message.propList.length; i++)
            exports.MassivePropParam.internalBinaryWrite(message.propList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassivePropSyncInfo
 */
exports.MassivePropSyncInfo = new MassivePropSyncInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinRecoverInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinRecoverInfo", [
            { no: 3, name: "local_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "data_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "massive_prop_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.MassivePropSyncInfo },
            { no: 1, name: "instanced_ability_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "instanced_modifier_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dataList: [], massivePropList: [], source: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 local_id */ 3:
                    message.localId = reader.uint32();
                    break;
                case /* repeated uint32 data_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.dataList.push(reader.uint32());
                    else
                        message.dataList.push(reader.uint32());
                    break;
                case /* optional bool is_serverbuff_modifier */ 5:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* repeated com.midnights.game.MassivePropSyncInfo massive_prop_list */ 6:
                    message.massivePropList.push(exports.MassivePropSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 instanced_ability_id */ 1:
                    message.source = {
                        oneofKind: "instancedAbilityId",
                        instancedAbilityId: reader.uint32()
                    };
                    break;
                case /* uint32 instanced_modifier_id */ 2:
                    message.source = {
                        oneofKind: "instancedModifierId",
                        instancedModifierId: reader.uint32()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 local_id = 3; */
        if (message.localId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.localId);
        /* repeated uint32 data_list = 4; */
        for (let i = 0; i < message.dataList.length; i++)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.dataList[i]);
        /* optional bool is_serverbuff_modifier = 5; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isServerbuffModifier);
        /* repeated com.midnights.game.MassivePropSyncInfo massive_prop_list = 6; */
        for (let i = 0; i < message.massivePropList.length; i++)
            exports.MassivePropSyncInfo.internalBinaryWrite(message.massivePropList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 instanced_ability_id = 1; */
        if (message.source.oneofKind === "instancedAbilityId")
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.source.instancedAbilityId);
        /* uint32 instanced_modifier_id = 2; */
        if (message.source.oneofKind === "instancedModifierId")
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.source.instancedModifierId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinRecoverInfo
 */
exports.AbilityMixinRecoverInfo = new AbilityMixinRecoverInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilitySyncStateInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilitySyncStateInfo", [
            { no: 1, name: "is_inited", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "dynamic_value_map", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityScalarValueEntry },
            { no: 3, name: "applied_abilities", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityAppliedAbility },
            { no: 4, name: "applied_modifiers", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityAppliedModifier },
            { no: 5, name: "mixin_recover_infos", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityMixinRecoverInfo },
            { no: 6, name: "sgv_dynamic_value_map", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityScalarValueEntry }
        ]);
    }
    create(value) {
        const message = { dynamicValueMap: [], appliedAbilities: [], appliedModifiers: [], mixinRecoverInfos: [], sgvDynamicValueMap: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_inited */ 1:
                    message.isInited = reader.bool();
                    break;
                case /* repeated com.midnights.game.AbilityScalarValueEntry dynamic_value_map */ 2:
                    message.dynamicValueMap.push(exports.AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.AbilityAppliedAbility applied_abilities */ 3:
                    message.appliedAbilities.push(exports.AbilityAppliedAbility.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.AbilityAppliedModifier applied_modifiers */ 4:
                    message.appliedModifiers.push(exports.AbilityAppliedModifier.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.AbilityMixinRecoverInfo mixin_recover_infos */ 5:
                    message.mixinRecoverInfos.push(exports.AbilityMixinRecoverInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.AbilityScalarValueEntry sgv_dynamic_value_map */ 6:
                    message.sgvDynamicValueMap.push(exports.AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_inited = 1; */
        if (message.isInited !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isInited);
        /* repeated com.midnights.game.AbilityScalarValueEntry dynamic_value_map = 2; */
        for (let i = 0; i < message.dynamicValueMap.length; i++)
            exports.AbilityScalarValueEntry.internalBinaryWrite(message.dynamicValueMap[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AbilityAppliedAbility applied_abilities = 3; */
        for (let i = 0; i < message.appliedAbilities.length; i++)
            exports.AbilityAppliedAbility.internalBinaryWrite(message.appliedAbilities[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AbilityAppliedModifier applied_modifiers = 4; */
        for (let i = 0; i < message.appliedModifiers.length; i++)
            exports.AbilityAppliedModifier.internalBinaryWrite(message.appliedModifiers[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AbilityMixinRecoverInfo mixin_recover_infos = 5; */
        for (let i = 0; i < message.mixinRecoverInfos.length; i++)
            exports.AbilityMixinRecoverInfo.internalBinaryWrite(message.mixinRecoverInfos[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AbilityScalarValueEntry sgv_dynamic_value_map = 6; */
        for (let i = 0; i < message.sgvDynamicValueMap.length; i++)
            exports.AbilityScalarValueEntry.internalBinaryWrite(message.sgvDynamicValueMap[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilitySyncStateInfo
 */
exports.AbilitySyncStateInfo = new AbilitySyncStateInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityEmbryo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityEmbryo", [
            { no: 1, name: "ability_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "ability_name_hash", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 3, name: "ability_override_name_hash", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 ability_id */ 1:
                    message.abilityId = reader.uint32();
                    break;
                case /* optional fixed32 ability_name_hash */ 2:
                    message.abilityNameHash = reader.fixed32();
                    break;
                case /* optional fixed32 ability_override_name_hash */ 3:
                    message.abilityOverrideNameHash = reader.fixed32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 ability_id = 1; */
        if (message.abilityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.abilityId);
        /* optional fixed32 ability_name_hash = 2; */
        if (message.abilityNameHash !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).fixed32(message.abilityNameHash);
        /* optional fixed32 ability_override_name_hash = 3; */
        if (message.abilityOverrideNameHash !== undefined)
            writer.tag(3, runtime_2.WireType.Bit32).fixed32(message.abilityOverrideNameHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityEmbryo
 */
exports.AbilityEmbryo = new AbilityEmbryo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityControlBlock$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityControlBlock", [
            { no: 1, name: "ability_embryo_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityEmbryo }
        ]);
    }
    create(value) {
        const message = { abilityEmbryoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AbilityEmbryo ability_embryo_list */ 1:
                    message.abilityEmbryoList.push(exports.AbilityEmbryo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AbilityEmbryo ability_embryo_list = 1; */
        for (let i = 0; i < message.abilityEmbryoList.length; i++)
            exports.AbilityEmbryo.internalBinaryWrite(message.abilityEmbryoList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityControlBlock
 */
exports.AbilityControlBlock = new AbilityControlBlock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Vector$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Vector", [
            { no: 1, name: "x", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "z", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float x */ 1:
                    message.x = reader.float();
                    break;
                case /* optional float y */ 2:
                    message.y = reader.float();
                    break;
                case /* optional float z */ 3:
                    message.z = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float x = 1; */
        if (message.x !== undefined)
            writer.tag(1, runtime_2.WireType.Bit32).float(message.x);
        /* optional float y = 2; */
        if (message.y !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.y);
        /* optional float z = 3; */
        if (message.z !== undefined)
            writer.tag(3, runtime_2.WireType.Bit32).float(message.z);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Vector
 */
exports.Vector = new Vector$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VectorPlane$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VectorPlane", [
            { no: 1, name: "x", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float x */ 1:
                    message.x = reader.float();
                    break;
                case /* optional float y */ 2:
                    message.y = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float x = 1; */
        if (message.x !== undefined)
            writer.tag(1, runtime_2.WireType.Bit32).float(message.x);
        /* optional float y = 2; */
        if (message.y !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.y);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VectorPlane
 */
exports.VectorPlane = new VectorPlane$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Vector3Int$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Vector3Int", [
            { no: 1, name: "x", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "z", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 x */ 1:
                    message.x = reader.int32();
                    break;
                case /* optional int32 y */ 2:
                    message.y = reader.int32();
                    break;
                case /* optional int32 z */ 3:
                    message.z = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 x = 1; */
        if (message.x !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.x);
        /* optional int32 y = 2; */
        if (message.y !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.y);
        /* optional int32 z = 3; */
        if (message.z !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.z);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Vector3Int
 */
exports.Vector3Int = new Vector3Int$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityMoveInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityMoveInfo", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "motion_info", kind: "message", T: () => exports.MotionInfo },
            { no: 3, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_reliable", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MotionInfo motion_info */ 2:
                    message.motionInfo = exports.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* optional uint32 scene_time */ 3:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 reliable_seq */ 4:
                    message.reliableSeq = reader.uint32();
                    break;
                case /* optional bool is_reliable */ 5:
                    message.isReliable = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.MotionInfo motion_info = 2; */
        if (message.motionInfo)
            exports.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_time = 3; */
        if (message.sceneTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 reliable_seq = 4; */
        if (message.reliableSeq !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.reliableSeq);
        /* optional bool is_reliable = 5; */
        if (message.isReliable !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isReliable);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityMoveInfo
 */
exports.EntityMoveInfo = new EntityMoveInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MotionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MotionInfo", [
            { no: 1, name: "pos", kind: "message", T: () => exports.Vector },
            { no: 2, name: "rot", kind: "message", T: () => exports.Vector },
            { no: 3, name: "speed", kind: "message", T: () => exports.Vector },
            { no: 4, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.MotionState", MotionState] },
            { no: 5, name: "params", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.Vector },
            { no: 6, name: "ref_pos", kind: "message", T: () => exports.Vector },
            { no: 7, name: "ref_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "interval_velocity", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { params: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 2:
                    message.rot = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector speed */ 3:
                    message.speed = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.speed);
                    break;
                case /* optional com.midnights.game.MotionState state */ 4:
                    message.state = reader.int32();
                    break;
                case /* repeated com.midnights.game.Vector params */ 5:
                    message.params.push(exports.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.Vector ref_pos */ 6:
                    message.refPos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.refPos);
                    break;
                case /* optional uint32 ref_id */ 7:
                    message.refId = reader.uint32();
                    break;
                case /* optional uint32 scene_time */ 8:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint64 interval_velocity */ 9:
                    message.intervalVelocity = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            exports.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 2; */
        if (message.rot)
            exports.Vector.internalBinaryWrite(message.rot, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector speed = 3; */
        if (message.speed)
            exports.Vector.internalBinaryWrite(message.speed, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MotionState state = 4; */
        if (message.state !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.state);
        /* repeated com.midnights.game.Vector params = 5; */
        for (let i = 0; i < message.params.length; i++)
            exports.Vector.internalBinaryWrite(message.params[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector ref_pos = 6; */
        if (message.refPos)
            exports.Vector.internalBinaryWrite(message.refPos, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 ref_id = 7; */
        if (message.refId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.refId);
        /* optional uint32 scene_time = 8; */
        if (message.sceneTime !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint64 interval_velocity = 9; */
        if (message.intervalVelocity !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint64(message.intervalVelocity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MotionInfo
 */
exports.MotionInfo = new MotionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlaceInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlaceInfo", [
            { no: 1, name: "pos", kind: "message", T: () => exports.Vector },
            { no: 2, name: "rot", kind: "message", T: () => exports.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 2:
                    message.rot = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            exports.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 2; */
        if (message.rot)
            exports.Vector.internalBinaryWrite(message.rot, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlaceInfo
 */
exports.PlaceInfo = new PlaceInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneWeaponInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneWeaponInfo", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "ability_info", kind: "message", T: () => exports.AbilitySyncStateInfo },
            { no: 8, name: "affix_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "renderer_changed_info", kind: "message", T: () => exports.EntityRendererChangedInfo }
        ]);
    }
    create(value) {
        const message = { affixMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 gadget_id */ 2:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 item_id */ 3:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 4:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 level */ 5:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 promote_level */ 6:
                    message.promoteLevel = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo ability_info */ 7:
                    message.abilityInfo = exports.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
                    break;
                case /* map<uint32, uint32> affix_map */ 8:
                    this.binaryReadMap8(message.affixMap, reader, options);
                    break;
                case /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info */ 9:
                    message.rendererChangedInfo = exports.EntityRendererChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.rendererChangedInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneWeaponInfo.affix_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 gadget_id = 2; */
        if (message.gadgetId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 item_id = 3; */
        if (message.itemId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.itemId);
        /* optional uint64 guid = 4; */
        if (message.guid !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint64(message.guid);
        /* optional uint32 level = 5; */
        if (message.level !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 promote_level = 6; */
        if (message.promoteLevel !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.promoteLevel);
        /* optional com.midnights.game.AbilitySyncStateInfo ability_info = 7; */
        if (message.abilityInfo)
            exports.AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> affix_map = 8; */
        for (let k of Object.keys(message.affixMap))
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.affixMap[k]).join();
        /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info = 9; */
        if (message.rendererChangedInfo)
            exports.EntityRendererChangedInfo.internalBinaryWrite(message.rendererChangedInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneWeaponInfo
 */
exports.SceneWeaponInfo = new SceneWeaponInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneReliquaryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneReliquaryInfo", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 2:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 level */ 3:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 promote_level */ 4:
                    message.promoteLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.itemId);
        /* optional uint64 guid = 2; */
        if (message.guid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.guid);
        /* optional uint32 level = 3; */
        if (message.level !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 promote_level = 4; */
        if (message.promoteLevel !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.promoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneReliquaryInfo
 */
exports.SceneReliquaryInfo = new SceneReliquaryInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerBuff$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerBuff", [
            { no: 1, name: "server_buff_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "server_buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "server_buff_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_modifier_added", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 server_buff_uid */ 1:
                    message.serverBuffUid = reader.uint32();
                    break;
                case /* optional uint32 server_buff_id */ 2:
                    message.serverBuffId = reader.uint32();
                    break;
                case /* optional uint32 server_buff_type */ 3:
                    message.serverBuffType = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 4:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional bool is_modifier_added */ 5:
                    message.isModifierAdded = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 server_buff_uid = 1; */
        if (message.serverBuffUid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.serverBuffUid);
        /* optional uint32 server_buff_id = 2; */
        if (message.serverBuffId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.serverBuffId);
        /* optional uint32 server_buff_type = 3; */
        if (message.serverBuffType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.serverBuffType);
        /* optional uint32 instanced_modifier_id = 4; */
        if (message.instancedModifierId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.instancedModifierId);
        /* optional bool is_modifier_added = 5; */
        if (message.isModifierAdded !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isModifierAdded);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerBuff
 */
exports.ServerBuff = new ServerBuff$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CurVehicleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CurVehicleInfo", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "pos", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 pos */ 2:
                    message.pos = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 pos = 2; */
        if (message.pos !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.pos);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CurVehicleInfo
 */
exports.CurVehicleInfo = new CurVehicleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExcelInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExcelInfo", [
            { no: 1, name: "prefab_path_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "prefab_path_remote_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "controller_path_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "controller_path_remote_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "combat_config_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 prefab_path_hash */ 1:
                    message.prefabPathHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 prefab_path_remote_hash */ 2:
                    message.prefabPathRemoteHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 controller_path_hash */ 3:
                    message.controllerPathHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 controller_path_remote_hash */ 4:
                    message.controllerPathRemoteHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 combat_config_hash */ 5:
                    message.combatConfigHash = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 prefab_path_hash = 1; */
        if (message.prefabPathHash !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.prefabPathHash);
        /* optional uint64 prefab_path_remote_hash = 2; */
        if (message.prefabPathRemoteHash !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.prefabPathRemoteHash);
        /* optional uint64 controller_path_hash = 3; */
        if (message.controllerPathHash !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.controllerPathHash);
        /* optional uint64 controller_path_remote_hash = 4; */
        if (message.controllerPathRemoteHash !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint64(message.controllerPathRemoteHash);
        /* optional uint64 combat_config_hash = 5; */
        if (message.combatConfigHash !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint64(message.combatConfigHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExcelInfo
 */
exports.AvatarExcelInfo = new AvatarExcelInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneAvatarInfo", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "equip_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "talent_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "weapon", kind: "message", T: () => exports.SceneWeaponInfo },
            { no: 9, name: "reliquary_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SceneReliquaryInfo },
            { no: 11, name: "core_proud_skill_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "inherent_proud_skill_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "server_buff_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ServerBuff },
            { no: 16, name: "team_resonance_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "wearing_flycloak_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "born_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "cur_vehicle_info", kind: "message", T: () => exports.CurVehicleInfo },
            { no: 21, name: "excel_info", kind: "message", T: () => exports.AvatarExcelInfo },
            { no: 22, name: "anim_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { equipIdList: [], talentIdList: [], reliquaryList: [], inherentProudSkillList: [], skillLevelMap: {}, proudSkillExtraLevelMap: {}, serverBuffList: [], teamResonanceList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 2:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 3:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 peer_id */ 4:
                    message.peerId = reader.uint32();
                    break;
                case /* repeated uint32 equip_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.equipIdList.push(reader.uint32());
                    else
                        message.equipIdList.push(reader.uint32());
                    break;
                case /* optional uint32 skill_depot_id */ 6:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* repeated uint32 talent_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.SceneWeaponInfo weapon */ 8:
                    message.weapon = exports.SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options, message.weapon);
                    break;
                case /* repeated com.midnights.game.SceneReliquaryInfo reliquary_list */ 9:
                    message.reliquaryList.push(exports.SceneReliquaryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 core_proud_skill_level */ 11:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                case /* repeated uint32 inherent_proud_skill_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.inherentProudSkillList.push(reader.uint32());
                    else
                        message.inherentProudSkillList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> skill_level_map */ 13:
                    this.binaryReadMap13(message.skillLevelMap, reader, options);
                    break;
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 14:
                    this.binaryReadMap14(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* repeated com.midnights.game.ServerBuff server_buff_list */ 15:
                    message.serverBuffList.push(exports.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 team_resonance_list */ 16:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.teamResonanceList.push(reader.uint32());
                    else
                        message.teamResonanceList.push(reader.uint32());
                    break;
                case /* optional uint32 wearing_flycloak_id */ 17:
                    message.wearingFlycloakId = reader.uint32();
                    break;
                case /* optional uint32 born_time */ 18:
                    message.bornTime = reader.uint32();
                    break;
                case /* optional uint32 costume_id */ 19:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional com.midnights.game.CurVehicleInfo cur_vehicle_info */ 20:
                    message.curVehicleInfo = exports.CurVehicleInfo.internalBinaryRead(reader, reader.uint32(), options, message.curVehicleInfo);
                    break;
                case /* optional com.midnights.game.AvatarExcelInfo excel_info */ 21:
                    message.excelInfo = exports.AvatarExcelInfo.internalBinaryRead(reader, reader.uint32(), options, message.excelInfo);
                    break;
                case /* optional uint32 anim_hash */ 22:
                    message.animHash = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap13(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneAvatarInfo.skill_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneAvatarInfo.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional uint32 avatar_id = 2; */
        if (message.avatarId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint64 guid = 3; */
        if (message.guid !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.guid);
        /* optional uint32 peer_id = 4; */
        if (message.peerId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.peerId);
        /* repeated uint32 equip_id_list = 5; */
        for (let i = 0; i < message.equipIdList.length; i++)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.equipIdList[i]);
        /* optional uint32 skill_depot_id = 6; */
        if (message.skillDepotId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* repeated uint32 talent_id_list = 7; */
        for (let i = 0; i < message.talentIdList.length; i++)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.talentIdList[i]);
        /* optional com.midnights.game.SceneWeaponInfo weapon = 8; */
        if (message.weapon)
            exports.SceneWeaponInfo.internalBinaryWrite(message.weapon, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.SceneReliquaryInfo reliquary_list = 9; */
        for (let i = 0; i < message.reliquaryList.length; i++)
            exports.SceneReliquaryInfo.internalBinaryWrite(message.reliquaryList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 core_proud_skill_level = 11; */
        if (message.coreProudSkillLevel !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.coreProudSkillLevel);
        /* repeated uint32 inherent_proud_skill_list = 12; */
        for (let i = 0; i < message.inherentProudSkillList.length; i++)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.inherentProudSkillList[i]);
        /* map<uint32, uint32> skill_level_map = 13; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        /* map<uint32, uint32> proud_skill_extra_level_map = 14; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* repeated com.midnights.game.ServerBuff server_buff_list = 15; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            exports.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 team_resonance_list = 16; */
        for (let i = 0; i < message.teamResonanceList.length; i++)
            writer.tag(16, runtime_2.WireType.Varint).uint32(message.teamResonanceList[i]);
        /* optional uint32 wearing_flycloak_id = 17; */
        if (message.wearingFlycloakId !== undefined)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.wearingFlycloakId);
        /* optional uint32 born_time = 18; */
        if (message.bornTime !== undefined)
            writer.tag(18, runtime_2.WireType.Varint).uint32(message.bornTime);
        /* optional uint32 costume_id = 19; */
        if (message.costumeId !== undefined)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* optional com.midnights.game.CurVehicleInfo cur_vehicle_info = 20; */
        if (message.curVehicleInfo)
            exports.CurVehicleInfo.internalBinaryWrite(message.curVehicleInfo, writer.tag(20, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AvatarExcelInfo excel_info = 21; */
        if (message.excelInfo)
            exports.AvatarExcelInfo.internalBinaryWrite(message.excelInfo, writer.tag(21, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 anim_hash = 22; */
        if (message.animHash !== undefined)
            writer.tag(22, runtime_2.WireType.Varint).uint32(message.animHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneAvatarInfo
 */
exports.SceneAvatarInfo = new SceneAvatarInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneFishInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneFishInfo", [
            { no: 1, name: "fish_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fish_pool_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "fish_pool_pos", kind: "message", T: () => exports.Vector },
            { no: 4, name: "fish_pool_gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "last_shock_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 fish_id */ 1:
                    message.fishId = reader.uint32();
                    break;
                case /* optional uint32 fish_pool_entity_id */ 2:
                    message.fishPoolEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector fish_pool_pos */ 3:
                    message.fishPoolPos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.fishPoolPos);
                    break;
                case /* optional uint32 fish_pool_gadget_id */ 4:
                    message.fishPoolGadgetId = reader.uint32();
                    break;
                case /* optional uint32 last_shock_time */ 5:
                    message.lastShockTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 fish_id = 1; */
        if (message.fishId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.fishId);
        /* optional uint32 fish_pool_entity_id = 2; */
        if (message.fishPoolEntityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fishPoolEntityId);
        /* optional com.midnights.game.Vector fish_pool_pos = 3; */
        if (message.fishPoolPos)
            exports.Vector.internalBinaryWrite(message.fishPoolPos, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 fish_pool_gadget_id = 4; */
        if (message.fishPoolGadgetId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.fishPoolGadgetId);
        /* optional uint32 last_shock_time = 5; */
        if (message.lastShockTime !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.lastShockTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneFishInfo
 */
exports.SceneFishInfo = new SceneFishInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishtankFishInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishtankFishInfo", [
            { no: 1, name: "fish_distance_from_water", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "fish_scale", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "initial_rotation_y", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float fish_distance_from_water */ 1:
                    message.fishDistanceFromWater = reader.float();
                    break;
                case /* optional float fish_scale */ 2:
                    message.fishScale = reader.float();
                    break;
                case /* optional float initial_rotation_y */ 3:
                    message.initialRotationY = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float fish_distance_from_water = 1; */
        if (message.fishDistanceFromWater !== undefined)
            writer.tag(1, runtime_2.WireType.Bit32).float(message.fishDistanceFromWater);
        /* optional float fish_scale = 2; */
        if (message.fishScale !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.fishScale);
        /* optional float initial_rotation_y = 3; */
        if (message.initialRotationY !== undefined)
            writer.tag(3, runtime_2.WireType.Bit32).float(message.initialRotationY);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishtankFishInfo
 */
exports.FishtankFishInfo = new FishtankFishInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneMonsterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneMonsterInfo", [
            { no: 1, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "weapon_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SceneWeaponInfo },
            { no: 5, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "affix_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_elite", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "summoned_tag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "summon_tag_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "pose_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "born_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MonsterBornType", MonsterBornType] },
            { no: 13, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mark_flag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "title_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "special_name_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "attack_target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "monster_route", kind: "message", T: () => exports.MonsterRoute },
            { no: 19, name: "ai_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "level_route_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "init_pose_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 22, name: "is_light", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "kill_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 50, name: "fish_info", kind: "message", oneof: "content", T: () => exports.SceneFishInfo },
            { no: 51, name: "fishtank_fish_info", kind: "message", oneof: "content", T: () => exports.FishtankFishInfo }
        ]);
    }
    create(value) {
        const message = { weaponList: [], affixList: [], summonTagMap: {}, content: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 monster_id */ 1:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.SceneWeaponInfo weapon_list */ 4:
                    message.weaponList.push(exports.SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 authority_peer_id */ 5:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
                    break;
                case /* optional bool is_elite */ 7:
                    message.isElite = reader.bool();
                    break;
                case /* optional uint32 owner_entity_id */ 8:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional uint32 summoned_tag */ 9:
                    message.summonedTag = reader.uint32();
                    break;
                case /* map<uint32, uint32> summon_tag_map */ 10:
                    this.binaryReadMap10(message.summonTagMap, reader, options);
                    break;
                case /* optional uint32 pose_id */ 11:
                    message.poseId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MonsterBornType born_type */ 12:
                    message.bornType = reader.int32();
                    break;
                case /* optional uint32 block_id */ 13:
                    message.blockId = reader.uint32();
                    break;
                case /* optional uint32 mark_flag */ 14:
                    message.markFlag = reader.uint32();
                    break;
                case /* optional uint32 title_id */ 15:
                    message.titleId = reader.uint32();
                    break;
                case /* optional uint32 special_name_id */ 16:
                    message.specialNameId = reader.uint32();
                    break;
                case /* optional uint32 attack_target_id */ 17:
                    message.attackTargetId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MonsterRoute monster_route */ 18:
                    message.monsterRoute = exports.MonsterRoute.internalBinaryRead(reader, reader.uint32(), options, message.monsterRoute);
                    break;
                case /* optional uint32 ai_config_id */ 19:
                    message.aiConfigId = reader.uint32();
                    break;
                case /* optional uint32 level_route_id */ 20:
                    message.levelRouteId = reader.uint32();
                    break;
                case /* optional uint32 init_pose_id */ 21:
                    message.initPoseId = reader.uint32();
                    break;
                case /* optional bool is_light */ 22:
                    message.isLight = reader.bool();
                    break;
                case /* optional uint32 kill_num */ 23:
                    message.killNum = reader.uint32();
                    break;
                case /* com.midnights.game.SceneFishInfo fish_info */ 50:
                    message.content = {
                        oneofKind: "fishInfo",
                        fishInfo: exports.SceneFishInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.fishInfo)
                    };
                    break;
                case /* com.midnights.game.FishtankFishInfo fishtank_fish_info */ 51:
                    message.content = {
                        oneofKind: "fishtankFishInfo",
                        fishtankFishInfo: exports.FishtankFishInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.fishtankFishInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneMonsterInfo.summon_tag_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 monster_id = 1; */
        if (message.monsterId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.monsterId);
        /* optional uint32 group_id = 2; */
        if (message.groupId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.groupId);
        /* optional uint32 config_id = 3; */
        if (message.configId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.configId);
        /* repeated com.midnights.game.SceneWeaponInfo weapon_list = 4; */
        for (let i = 0; i < message.weaponList.length; i++)
            exports.SceneWeaponInfo.internalBinaryWrite(message.weaponList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 authority_peer_id = 5; */
        if (message.authorityPeerId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        /* repeated uint32 affix_list = 6; */
        for (let i = 0; i < message.affixList.length; i++)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.affixList[i]);
        /* optional bool is_elite = 7; */
        if (message.isElite !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isElite);
        /* optional uint32 owner_entity_id = 8; */
        if (message.ownerEntityId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 summoned_tag = 9; */
        if (message.summonedTag !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.summonedTag);
        /* map<uint32, uint32> summon_tag_map = 10; */
        for (let k of Object.keys(message.summonTagMap))
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.summonTagMap[k]).join();
        /* optional uint32 pose_id = 11; */
        if (message.poseId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.poseId);
        /* optional com.midnights.game.MonsterBornType born_type = 12; */
        if (message.bornType !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.bornType);
        /* optional uint32 block_id = 13; */
        if (message.blockId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.blockId);
        /* optional uint32 mark_flag = 14; */
        if (message.markFlag !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.markFlag);
        /* optional uint32 title_id = 15; */
        if (message.titleId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.titleId);
        /* optional uint32 special_name_id = 16; */
        if (message.specialNameId !== undefined)
            writer.tag(16, runtime_2.WireType.Varint).uint32(message.specialNameId);
        /* optional uint32 attack_target_id = 17; */
        if (message.attackTargetId !== undefined)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.attackTargetId);
        /* optional com.midnights.game.MonsterRoute monster_route = 18; */
        if (message.monsterRoute)
            exports.MonsterRoute.internalBinaryWrite(message.monsterRoute, writer.tag(18, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 ai_config_id = 19; */
        if (message.aiConfigId !== undefined)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.aiConfigId);
        /* optional uint32 level_route_id = 20; */
        if (message.levelRouteId !== undefined)
            writer.tag(20, runtime_2.WireType.Varint).uint32(message.levelRouteId);
        /* optional uint32 init_pose_id = 21; */
        if (message.initPoseId !== undefined)
            writer.tag(21, runtime_2.WireType.Varint).uint32(message.initPoseId);
        /* optional bool is_light = 22; */
        if (message.isLight !== undefined)
            writer.tag(22, runtime_2.WireType.Varint).bool(message.isLight);
        /* optional uint32 kill_num = 23; */
        if (message.killNum !== undefined)
            writer.tag(23, runtime_2.WireType.Varint).uint32(message.killNum);
        /* com.midnights.game.SceneFishInfo fish_info = 50; */
        if (message.content.oneofKind === "fishInfo")
            exports.SceneFishInfo.internalBinaryWrite(message.content.fishInfo, writer.tag(50, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.FishtankFishInfo fishtank_fish_info = 51; */
        if (message.content.oneofKind === "fishtankFishInfo")
            exports.FishtankFishInfo.internalBinaryWrite(message.content.fishtankFishInfo, writer.tag(51, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneMonsterInfo
 */
exports.SceneMonsterInfo = new SceneMonsterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneNpcInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneNpcInfo", [
            { no: 1, name: "npc_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 npc_id */ 1:
                    message.npcId = reader.uint32();
                    break;
                case /* optional uint32 room_id */ 2:
                    message.roomId = reader.uint32();
                    break;
                case /* optional uint32 parent_quest_id */ 3:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional uint32 block_id */ 4:
                    message.blockId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 npc_id = 1; */
        if (message.npcId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.npcId);
        /* optional uint32 room_id = 2; */
        if (message.roomId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.roomId);
        /* optional uint32 parent_quest_id = 3; */
        if (message.parentQuestId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.parentQuestId);
        /* optional uint32 block_id = 4; */
        if (message.blockId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.blockId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneNpcInfo
 */
exports.SceneNpcInfo = new SceneNpcInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorktopInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorktopInfo", [
            { no: 1, name: "option_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_guest_can_operate", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { optionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 option_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.optionList.push(reader.uint32());
                    else
                        message.optionList.push(reader.uint32());
                    break;
                case /* optional bool is_guest_can_operate */ 2:
                    message.isGuestCanOperate = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 option_list = 1; */
        for (let i = 0; i < message.optionList.length; i++)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.optionList[i]);
        /* optional bool is_guest_can_operate = 2; */
        if (message.isGuestCanOperate !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isGuestCanOperate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorktopInfo
 */
exports.WorktopInfo = new WorktopInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MathQuaternion$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MathQuaternion", [
            { no: 1, name: "x", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "z", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "w", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float x */ 1:
                    message.x = reader.float();
                    break;
                case /* optional float y */ 2:
                    message.y = reader.float();
                    break;
                case /* optional float z */ 3:
                    message.z = reader.float();
                    break;
                case /* optional float w */ 4:
                    message.w = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float x = 1; */
        if (message.x !== undefined)
            writer.tag(1, runtime_2.WireType.Bit32).float(message.x);
        /* optional float y = 2; */
        if (message.y !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.y);
        /* optional float z = 3; */
        if (message.z !== undefined)
            writer.tag(3, runtime_2.WireType.Bit32).float(message.z);
        /* optional float w = 4; */
        if (message.w !== undefined)
            writer.tag(4, runtime_2.WireType.Bit32).float(message.w);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MathQuaternion
 */
exports.MathQuaternion = new MathQuaternion$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlatformInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlatformInfo", [
            { no: 1, name: "route_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "start_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "start_route_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "start_pos", kind: "message", T: () => exports.Vector },
            { no: 8, name: "is_started", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "start_rot", kind: "message", T: () => exports.MathQuaternion },
            { no: 10, name: "stop_scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "pos_offset", kind: "message", T: () => exports.Vector },
            { no: 12, name: "rot_offset", kind: "message", T: () => exports.MathQuaternion },
            { no: 13, name: "moving_platform_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MovingPlatformType", MovingPlatformType] },
            { no: 14, name: "is_active", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "route", kind: "message", T: () => exports.Route },
            { no: 16, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 route_id */ 1:
                    message.routeId = reader.uint32();
                    break;
                case /* optional int32 start_index */ 2:
                    message.startIndex = reader.int32();
                    break;
                case /* optional uint32 start_route_time */ 3:
                    message.startRouteTime = reader.uint32();
                    break;
                case /* optional uint32 start_scene_time */ 4:
                    message.startSceneTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector start_pos */ 7:
                    message.startPos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.startPos);
                    break;
                case /* optional bool is_started */ 8:
                    message.isStarted = reader.bool();
                    break;
                case /* optional com.midnights.game.MathQuaternion start_rot */ 9:
                    message.startRot = exports.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.startRot);
                    break;
                case /* optional uint32 stop_scene_time */ 10:
                    message.stopSceneTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos_offset */ 11:
                    message.posOffset = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.posOffset);
                    break;
                case /* optional com.midnights.game.MathQuaternion rot_offset */ 12:
                    message.rotOffset = exports.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotOffset);
                    break;
                case /* optional com.midnights.game.MovingPlatformType moving_platform_type */ 13:
                    message.movingPlatformType = reader.int32();
                    break;
                case /* optional bool is_active */ 14:
                    message.isActive = reader.bool();
                    break;
                case /* optional com.midnights.game.Route route */ 15:
                    message.route = exports.Route.internalBinaryRead(reader, reader.uint32(), options, message.route);
                    break;
                case /* optional uint32 point_id */ 16:
                    message.pointId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 route_id = 1; */
        if (message.routeId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.routeId);
        /* optional int32 start_index = 2; */
        if (message.startIndex !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.startIndex);
        /* optional uint32 start_route_time = 3; */
        if (message.startRouteTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.startRouteTime);
        /* optional uint32 start_scene_time = 4; */
        if (message.startSceneTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.startSceneTime);
        /* optional com.midnights.game.Vector start_pos = 7; */
        if (message.startPos)
            exports.Vector.internalBinaryWrite(message.startPos, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_started = 8; */
        if (message.isStarted !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isStarted);
        /* optional com.midnights.game.MathQuaternion start_rot = 9; */
        if (message.startRot)
            exports.MathQuaternion.internalBinaryWrite(message.startRot, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 stop_scene_time = 10; */
        if (message.stopSceneTime !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.stopSceneTime);
        /* optional com.midnights.game.Vector pos_offset = 11; */
        if (message.posOffset)
            exports.Vector.internalBinaryWrite(message.posOffset, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MathQuaternion rot_offset = 12; */
        if (message.rotOffset)
            exports.MathQuaternion.internalBinaryWrite(message.rotOffset, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MovingPlatformType moving_platform_type = 13; */
        if (message.movingPlatformType !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.movingPlatformType);
        /* optional bool is_active = 14; */
        if (message.isActive !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isActive);
        /* optional com.midnights.game.Route route = 15; */
        if (message.route)
            exports.Route.internalBinaryWrite(message.route, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 point_id = 16; */
        if (message.pointId !== undefined)
            writer.tag(16, runtime_2.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlatformInfo
 */
exports.PlatformInfo = new PlatformInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RoutePoint$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RoutePoint", [
            { no: 1, name: "position", kind: "message", T: () => exports.Vector },
            { no: 2, name: "arrive_range", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "has_reach_event", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "velocity", kind: "scalar", oneof: "moveParams", T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "time", kind: "scalar", oneof: "moveParams", T: 2 /*ScalarType.FLOAT*/ },
            { no: 21, name: "rotation", kind: "message", oneof: "rotateParams", T: () => exports.Vector },
            { no: 22, name: "rotation_speed", kind: "message", oneof: "rotateParams", T: () => exports.MathQuaternion },
            { no: 23, name: "axis_speed", kind: "message", oneof: "rotateParams", T: () => exports.MathQuaternion }
        ]);
    }
    create(value) {
        const message = { moveParams: { oneofKind: undefined }, rotateParams: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector position */ 1:
                    message.position = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* optional float arrive_range */ 2:
                    message.arriveRange = reader.float();
                    break;
                case /* optional bool has_reach_event */ 3:
                    message.hasReachEvent = reader.bool();
                    break;
                case /* float velocity */ 11:
                    message.moveParams = {
                        oneofKind: "velocity",
                        velocity: reader.float()
                    };
                    break;
                case /* float time */ 12:
                    message.moveParams = {
                        oneofKind: "time",
                        time: reader.float()
                    };
                    break;
                case /* com.midnights.game.Vector rotation */ 21:
                    message.rotateParams = {
                        oneofKind: "rotation",
                        rotation: exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rotateParams.rotation)
                    };
                    break;
                case /* com.midnights.game.MathQuaternion rotation_speed */ 22:
                    message.rotateParams = {
                        oneofKind: "rotationSpeed",
                        rotationSpeed: exports.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotateParams.rotationSpeed)
                    };
                    break;
                case /* com.midnights.game.MathQuaternion axis_speed */ 23:
                    message.rotateParams = {
                        oneofKind: "axisSpeed",
                        axisSpeed: exports.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotateParams.axisSpeed)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector position = 1; */
        if (message.position)
            exports.Vector.internalBinaryWrite(message.position, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional float arrive_range = 2; */
        if (message.arriveRange !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.arriveRange);
        /* optional bool has_reach_event = 3; */
        if (message.hasReachEvent !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.hasReachEvent);
        /* float velocity = 11; */
        if (message.moveParams.oneofKind === "velocity")
            writer.tag(11, runtime_2.WireType.Bit32).float(message.moveParams.velocity);
        /* float time = 12; */
        if (message.moveParams.oneofKind === "time")
            writer.tag(12, runtime_2.WireType.Bit32).float(message.moveParams.time);
        /* com.midnights.game.Vector rotation = 21; */
        if (message.rotateParams.oneofKind === "rotation")
            exports.Vector.internalBinaryWrite(message.rotateParams.rotation, writer.tag(21, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MathQuaternion rotation_speed = 22; */
        if (message.rotateParams.oneofKind === "rotationSpeed")
            exports.MathQuaternion.internalBinaryWrite(message.rotateParams.rotationSpeed, writer.tag(22, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MathQuaternion axis_speed = 23; */
        if (message.rotateParams.oneofKind === "axisSpeed")
            exports.MathQuaternion.internalBinaryWrite(message.rotateParams.axisSpeed, writer.tag(23, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RoutePoint
 */
exports.RoutePoint = new RoutePoint$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Route$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Route", [
            { no: 1, name: "route_points", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.RoutePoint },
            { no: 2, name: "route_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { routePoints: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.RoutePoint route_points */ 1:
                    message.routePoints.push(exports.RoutePoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 route_type */ 2:
                    message.routeType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.RoutePoint route_points = 1; */
        for (let i = 0; i < message.routePoints.length; i++)
            exports.RoutePoint.internalBinaryWrite(message.routePoints[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 route_type = 2; */
        if (message.routeType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.routeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Route
 */
exports.Route = new Route$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MonsterRoute$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MonsterRoute", [
            { no: 1, name: "route_points", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.RoutePoint },
            { no: 2, name: "speed_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "route_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "arrive_range", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { routePoints: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.RoutePoint route_points */ 1:
                    message.routePoints.push(exports.RoutePoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 speed_level */ 2:
                    message.speedLevel = reader.uint32();
                    break;
                case /* optional uint32 route_type */ 3:
                    message.routeType = reader.uint32();
                    break;
                case /* optional float arrive_range */ 4:
                    message.arriveRange = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.RoutePoint route_points = 1; */
        for (let i = 0; i < message.routePoints.length; i++)
            exports.RoutePoint.internalBinaryWrite(message.routePoints[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 speed_level = 2; */
        if (message.speedLevel !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.speedLevel);
        /* optional uint32 route_type = 3; */
        if (message.routeType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.routeType);
        /* optional float arrive_range = 4; */
        if (message.arriveRange !== undefined)
            writer.tag(4, runtime_2.WireType.Bit32).float(message.arriveRange);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MonsterRoute
 */
exports.MonsterRoute = new MonsterRoute$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeatherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeatherInfo", [
            { no: 1, name: "weather_area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 weather_area_id */ 1:
                    message.weatherAreaId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 weather_area_id = 1; */
        if (message.weatherAreaId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.weatherAreaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeatherInfo
 */
exports.WeatherInfo = new WeatherInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientGadgetInfo", [
            { no: 1, name: "camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "camp_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "async_load", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "is_peer_id_from_player", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "target_entity_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { targetEntityIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 camp_id */ 1:
                    message.campId = reader.uint32();
                    break;
                case /* optional uint32 camp_type */ 2:
                    message.campType = reader.uint32();
                    break;
                case /* optional uint64 guid */ 3:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 owner_entity_id */ 4:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional uint32 target_entity_id */ 5:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* optional bool async_load */ 6:
                    message.asyncLoad = reader.bool();
                    break;
                case /* optional bool is_peer_id_from_player */ 7:
                    message.isPeerIdFromPlayer = reader.bool();
                    break;
                case /* repeated uint32 target_entity_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetEntityIdList.push(reader.uint32());
                    else
                        message.targetEntityIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 camp_id = 1; */
        if (message.campId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.campId);
        /* optional uint32 camp_type = 2; */
        if (message.campType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.campType);
        /* optional uint64 guid = 3; */
        if (message.guid !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.guid);
        /* optional uint32 owner_entity_id = 4; */
        if (message.ownerEntityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 target_entity_id = 5; */
        if (message.targetEntityId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        /* optional bool async_load = 6; */
        if (message.asyncLoad !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.asyncLoad);
        /* optional bool is_peer_id_from_player = 7; */
        if (message.isPeerIdFromPlayer !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isPeerIdFromPlayer);
        /* repeated uint32 target_entity_id_list = 8; */
        for (let i = 0; i < message.targetEntityIdList.length; i++)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.targetEntityIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientGadgetInfo
 */
exports.ClientGadgetInfo = new ClientGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityGadgetInfo", [
            { no: 1, name: "camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "camp_target_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 camp_id */ 1:
                    message.campId = reader.uint32();
                    break;
                case /* optional uint32 camp_target_type */ 2:
                    message.campTargetType = reader.uint32();
                    break;
                case /* optional uint32 target_entity_id */ 3:
                    message.targetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 camp_id = 1; */
        if (message.campId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.campId);
        /* optional uint32 camp_target_type = 2; */
        if (message.campTargetType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.campTargetType);
        /* optional uint32 target_entity_id = 3; */
        if (message.targetEntityId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityGadgetInfo
 */
exports.AbilityGadgetInfo = new AbilityGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GatherGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GatherGadgetInfo", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_forbid_guest", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* optional bool is_forbid_guest */ 2:
                    message.isForbidGuest = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.itemId);
        /* optional bool is_forbid_guest = 2; */
        if (message.isForbidGuest !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isForbidGuest);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GatherGadgetInfo
 */
exports.GatherGadgetInfo = new GatherGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StatueGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StatueGadgetInfo", [
            { no: 1, name: "opened_statue_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { openedStatueUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 opened_statue_uid_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openedStatueUidList.push(reader.uint32());
                    else
                        message.openedStatueUidList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 opened_statue_uid_list = 1; */
        for (let i = 0; i < message.openedStatueUidList.length; i++)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.openedStatueUidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StatueGadgetInfo
 */
exports.StatueGadgetInfo = new StatueGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeeklyBossResinDiscountInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeeklyBossResinDiscountInfo", [
            { no: 1, name: "discount_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "discount_num_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "resin_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "original_resin_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 discount_num */ 1:
                    message.discountNum = reader.uint32();
                    break;
                case /* optional uint32 discount_num_limit */ 2:
                    message.discountNumLimit = reader.uint32();
                    break;
                case /* optional uint32 resin_cost */ 3:
                    message.resinCost = reader.uint32();
                    break;
                case /* optional uint32 original_resin_cost */ 4:
                    message.originalResinCost = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 discount_num = 1; */
        if (message.discountNum !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.discountNum);
        /* optional uint32 discount_num_limit = 2; */
        if (message.discountNumLimit !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.discountNumLimit);
        /* optional uint32 resin_cost = 3; */
        if (message.resinCost !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.resinCost);
        /* optional uint32 original_resin_cost = 4; */
        if (message.originalResinCost !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.originalResinCost);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeeklyBossResinDiscountInfo
 */
exports.WeeklyBossResinDiscountInfo = new WeeklyBossResinDiscountInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BossChestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BossChestInfo", [
            { no: 1, name: "monster_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "resin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "remain_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "qualify_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "uid_discount_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.WeeklyBossResinDiscountInfo } }
        ]);
    }
    create(value) {
        const message = { remainUidList: [], qualifyUidList: [], uidDiscountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 monster_config_id */ 1:
                    message.monsterConfigId = reader.uint32();
                    break;
                case /* optional uint32 resin */ 2:
                    message.resin = reader.uint32();
                    break;
                case /* repeated uint32 remain_uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.remainUidList.push(reader.uint32());
                    else
                        message.remainUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 qualify_uid_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
                    break;
                case /* map<uint32, com.midnights.game.WeeklyBossResinDiscountInfo> uid_discount_map */ 5:
                    this.binaryReadMap5(message.uidDiscountMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.BossChestInfo.uid_discount_map");
            }
        }
        map[key ?? 0] = val ?? exports.WeeklyBossResinDiscountInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 monster_config_id = 1; */
        if (message.monsterConfigId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.monsterConfigId);
        /* optional uint32 resin = 2; */
        if (message.resin !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.resin);
        /* repeated uint32 remain_uid_list = 3; */
        for (let i = 0; i < message.remainUidList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.remainUidList[i]);
        /* repeated uint32 qualify_uid_list = 4; */
        for (let i = 0; i < message.qualifyUidList.length; i++)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.qualifyUidList[i]);
        /* map<uint32, com.midnights.game.WeeklyBossResinDiscountInfo> uid_discount_map = 5; */
        for (let k of Object.keys(message.uidDiscountMap)) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.WeeklyBossResinDiscountInfo.internalBinaryWrite(message.uidDiscountMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BossChestInfo
 */
exports.BossChestInfo = new BossChestInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlossomChestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BlossomChestInfo", [
            { no: 1, name: "resin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "qualify_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "remain_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "dead_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "blossom_refresh_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "refresh_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { qualifyUidList: [], remainUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 resin */ 1:
                    message.resin = reader.uint32();
                    break;
                case /* repeated uint32 qualify_uid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 remain_uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.remainUidList.push(reader.uint32());
                    else
                        message.remainUidList.push(reader.uint32());
                    break;
                case /* optional uint32 dead_time */ 4:
                    message.deadTime = reader.uint32();
                    break;
                case /* optional uint32 blossom_refresh_type */ 5:
                    message.blossomRefreshType = reader.uint32();
                    break;
                case /* optional uint32 refresh_id */ 6:
                    message.refreshId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 resin = 1; */
        if (message.resin !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.resin);
        /* repeated uint32 qualify_uid_list = 2; */
        for (let i = 0; i < message.qualifyUidList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.qualifyUidList[i]);
        /* repeated uint32 remain_uid_list = 3; */
        for (let i = 0; i < message.remainUidList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.remainUidList[i]);
        /* optional uint32 dead_time = 4; */
        if (message.deadTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.deadTime);
        /* optional uint32 blossom_refresh_type = 5; */
        if (message.blossomRefreshType !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.blossomRefreshType);
        /* optional uint32 refresh_id = 6; */
        if (message.refreshId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.refreshId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BlossomChestInfo
 */
exports.BlossomChestInfo = new BlossomChestInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetCrucibleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetCrucibleInfo", [
            { no: 1, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prepare_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 mp_play_id */ 1:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional uint32 prepare_end_time */ 2:
                    message.prepareEndTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 mp_play_id = 1; */
        if (message.mpPlayId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.mpPlayId);
        /* optional uint32 prepare_end_time = 2; */
        if (message.prepareEndTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.prepareEndTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetCrucibleInfo
 */
exports.GadgetCrucibleInfo = new GadgetCrucibleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetPlayInfo", [
            { no: 1, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "progress_stage_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_cd", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "crucible_info", kind: "message", oneof: "playInfo", T: () => exports.GadgetCrucibleInfo }
        ]);
    }
    create(value) {
        const message = { progressStageList: [], playInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_type */ 1:
                    message.playType = reader.uint32();
                    break;
                case /* optional uint32 duration */ 2:
                    message.duration = reader.uint32();
                    break;
                case /* repeated uint32 progress_stage_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.progressStageList.push(reader.uint32());
                    else
                        message.progressStageList.push(reader.uint32());
                    break;
                case /* optional uint32 start_cd */ 4:
                    message.startCd = reader.uint32();
                    break;
                case /* optional uint32 start_time */ 5:
                    message.startTime = reader.uint32();
                    break;
                case /* optional uint32 progress */ 6:
                    message.progress = reader.uint32();
                    break;
                case /* com.midnights.game.GadgetCrucibleInfo crucible_info */ 21:
                    message.playInfo = {
                        oneofKind: "crucibleInfo",
                        crucibleInfo: exports.GadgetCrucibleInfo.internalBinaryRead(reader, reader.uint32(), options, message.playInfo.crucibleInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 play_type = 1; */
        if (message.playType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.playType);
        /* optional uint32 duration = 2; */
        if (message.duration !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.duration);
        /* repeated uint32 progress_stage_list = 3; */
        for (let i = 0; i < message.progressStageList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.progressStageList[i]);
        /* optional uint32 start_cd = 4; */
        if (message.startCd !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.startCd);
        /* optional uint32 start_time = 5; */
        if (message.startTime !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.startTime);
        /* optional uint32 progress = 6; */
        if (message.progress !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.progress);
        /* com.midnights.game.GadgetCrucibleInfo crucible_info = 21; */
        if (message.playInfo.oneofKind === "crucibleInfo")
            exports.GadgetCrucibleInfo.internalBinaryWrite(message.playInfo.crucibleInfo, writer.tag(21, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetPlayInfo
 */
exports.GadgetPlayInfo = new GadgetPlayInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayRewardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayRewardInfo", [
            { no: 1, name: "resin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "remain_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "qualify_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { remainUidList: [], qualifyUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 resin */ 1:
                    message.resin = reader.uint32();
                    break;
                case /* repeated uint32 remain_uid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.remainUidList.push(reader.uint32());
                    else
                        message.remainUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 qualify_uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 resin = 1; */
        if (message.resin !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.resin);
        /* repeated uint32 remain_uid_list = 2; */
        for (let i = 0; i < message.remainUidList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.remainUidList[i]);
        /* repeated uint32 qualify_uid_list = 3; */
        for (let i = 0; i < message.qualifyUidList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.qualifyUidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayRewardInfo
 */
exports.MpPlayRewardInfo = new MpPlayRewardInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetGeneralRewardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetGeneralRewardInfo", [
            { no: 1, name: "resin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "dead_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "remain_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "qualify_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "item_param", kind: "message", T: () => exports.ItemParam }
        ]);
    }
    create(value) {
        const message = { remainUidList: [], qualifyUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 resin */ 1:
                    message.resin = reader.uint32();
                    break;
                case /* optional uint32 dead_time */ 2:
                    message.deadTime = reader.uint32();
                    break;
                case /* repeated uint32 remain_uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.remainUidList.push(reader.uint32());
                    else
                        message.remainUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 qualify_uid_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.ItemParam item_param */ 5:
                    message.itemParam = exports.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.itemParam);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 resin = 1; */
        if (message.resin !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.resin);
        /* optional uint32 dead_time = 2; */
        if (message.deadTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.deadTime);
        /* repeated uint32 remain_uid_list = 3; */
        for (let i = 0; i < message.remainUidList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.remainUidList[i]);
        /* repeated uint32 qualify_uid_list = 4; */
        for (let i = 0; i < message.qualifyUidList.length; i++)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.qualifyUidList[i]);
        /* optional com.midnights.game.ItemParam item_param = 5; */
        if (message.itemParam)
            exports.ItemParam.internalBinaryWrite(message.itemParam, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetGeneralRewardInfo
 */
exports.GadgetGeneralRewardInfo = new GadgetGeneralRewardInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OfferingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OfferingInfo", [
            { no: 1, name: "offering_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 offering_id */ 1:
                    message.offeringId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 offering_id = 1; */
        if (message.offeringId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.offeringId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OfferingInfo
 */
exports.OfferingInfo = new OfferingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuildingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuildingInfo", [
            { no: 1, name: "building_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "point_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "refund", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "current_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "max_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 building_id */ 1:
                    message.buildingId = reader.uint32();
                    break;
                case /* optional uint32 point_config_id */ 2:
                    message.pointConfigId = reader.uint32();
                    break;
                case /* optional uint32 cost */ 3:
                    message.cost = reader.uint32();
                    break;
                case /* optional uint32 refund */ 5:
                    message.refund = reader.uint32();
                    break;
                case /* optional uint32 owner_uid */ 6:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional uint32 current_num */ 7:
                    message.currentNum = reader.uint32();
                    break;
                case /* optional uint32 max_num */ 8:
                    message.maxNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 building_id = 1; */
        if (message.buildingId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.buildingId);
        /* optional uint32 point_config_id = 2; */
        if (message.pointConfigId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.pointConfigId);
        /* optional uint32 cost = 3; */
        if (message.cost !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.cost);
        /* optional uint32 refund = 5; */
        if (message.refund !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.refund);
        /* optional uint32 owner_uid = 6; */
        if (message.ownerUid !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.ownerUid);
        /* optional uint32 current_num = 7; */
        if (message.currentNum !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.currentNum);
        /* optional uint32 max_num = 8; */
        if (message.maxNum !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.maxNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuildingInfo
 */
exports.BuildingInfo = new BuildingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FoundationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FoundationInfo", [
            { no: 1, name: "status", kind: "enum", opt: true, T: () => ["com.midnights.game.FoundationStatus", FoundationStatus, "FOUNDATION_STATUS_"] },
            { no: 2, name: "uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "current_building_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "locked_by_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FoundationStatus status */ 1:
                    message.status = reader.int32();
                    break;
                case /* repeated uint32 uid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* optional uint32 current_building_id */ 3:
                    message.currentBuildingId = reader.uint32();
                    break;
                case /* optional uint32 locked_by_uid */ 4:
                    message.lockedByUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FoundationStatus status = 1; */
        if (message.status !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.status);
        /* repeated uint32 uid_list = 2; */
        for (let i = 0; i < message.uidList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.uidList[i]);
        /* optional uint32 current_building_id = 3; */
        if (message.currentBuildingId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.currentBuildingId);
        /* optional uint32 locked_by_uid = 4; */
        if (message.lockedByUid !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.lockedByUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FoundationInfo
 */
exports.FoundationInfo = new FoundationInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VehicleMember$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VehicleMember", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "pos", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 2:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 pos */ 3:
                    message.pos = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional uint64 avatar_guid = 2; */
        if (message.avatarGuid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 pos = 3; */
        if (message.pos !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.pos);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VehicleMember
 */
exports.VehicleMember = new VehicleMember$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VehicleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VehicleInfo", [
            { no: 1, name: "member_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.VehicleMember },
            { no: 2, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cur_stamina", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { memberList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.VehicleMember member_list */ 1:
                    message.memberList.push(exports.VehicleMember.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 owner_uid */ 2:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional float cur_stamina */ 3:
                    message.curStamina = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.VehicleMember member_list = 1; */
        for (let i = 0; i < message.memberList.length; i++)
            exports.VehicleMember.internalBinaryWrite(message.memberList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 owner_uid = 2; */
        if (message.ownerUid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.ownerUid);
        /* optional float cur_stamina = 3; */
        if (message.curStamina !== undefined)
            writer.tag(3, runtime_2.WireType.Bit32).float(message.curStamina);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VehicleInfo
 */
exports.VehicleInfo = new VehicleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EchoShellInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EchoShellInfo", [
            { no: 1, name: "shell_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 shell_id */ 1:
                    message.shellId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 shell_id = 1; */
        if (message.shellId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.shellId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EchoShellInfo
 */
exports.EchoShellInfo = new EchoShellInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScreenInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScreenInfo", [
            { no: 1, name: "live_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "projector_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 live_id */ 1:
                    message.liveId = reader.uint32();
                    break;
                case /* optional uint32 projector_entity_id */ 2:
                    message.projectorEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 live_id = 1; */
        if (message.liveId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.liveId);
        /* optional uint32 projector_entity_id = 2; */
        if (message.projectorEntityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.projectorEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScreenInfo
 */
exports.ScreenInfo = new ScreenInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishPoolInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishPoolInfo", [
            { no: 1, name: "pool_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fish_area_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "today_fish_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fishAreaList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 pool_id */ 1:
                    message.poolId = reader.uint32();
                    break;
                case /* repeated uint32 fish_area_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishAreaList.push(reader.uint32());
                    else
                        message.fishAreaList.push(reader.uint32());
                    break;
                case /* optional uint32 today_fish_num */ 3:
                    message.todayFishNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 pool_id = 1; */
        if (message.poolId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.poolId);
        /* repeated uint32 fish_area_list = 2; */
        for (let i = 0; i < message.fishAreaList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fishAreaList[i]);
        /* optional uint32 today_fish_num = 3; */
        if (message.todayFishNum !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.todayFishNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishPoolInfo
 */
exports.FishPoolInfo = new FishPoolInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomCommonNodeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomCommonNodeInfo", [
            { no: 1, name: "parent_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "slot_identifier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 parent_index */ 1:
                    message.parentIndex = reader.int32();
                    break;
                case /* optional uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* optional string slot_identifier */ 3:
                    message.slotIdentifier = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 parent_index = 1; */
        if (message.parentIndex !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.parentIndex);
        /* optional uint32 config_id = 2; */
        if (message.configId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.configId);
        /* optional string slot_identifier = 3; */
        if (message.slotIdentifier !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.slotIdentifier);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomCommonNodeInfo
 */
exports.CustomCommonNodeInfo = new CustomCommonNodeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomGadgetTreeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomGadgetTreeInfo", [
            { no: 1, name: "node_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CustomCommonNodeInfo }
        ]);
    }
    create(value) {
        const message = { nodeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CustomCommonNodeInfo node_list */ 1:
                    message.nodeList.push(exports.CustomCommonNodeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.CustomCommonNodeInfo node_list = 1; */
        for (let i = 0; i < message.nodeList.length; i++)
            exports.CustomCommonNodeInfo.internalBinaryWrite(message.nodeList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomGadgetTreeInfo
 */
exports.CustomGadgetTreeInfo = new CustomGadgetTreeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RoguelikeGadgetInfo", [
            { no: 1, name: "cell_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cell_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cell_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cell_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cell_config_id */ 1:
                    message.cellConfigId = reader.uint32();
                    break;
                case /* optional uint32 cell_type */ 2:
                    message.cellType = reader.uint32();
                    break;
                case /* optional uint32 cell_state */ 3:
                    message.cellState = reader.uint32();
                    break;
                case /* optional uint32 cell_id */ 4:
                    message.cellId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cell_config_id = 1; */
        if (message.cellConfigId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.cellConfigId);
        /* optional uint32 cell_type = 2; */
        if (message.cellType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.cellType);
        /* optional uint32 cell_state = 3; */
        if (message.cellState !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.cellState);
        /* optional uint32 cell_id = 4; */
        if (message.cellId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.cellId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RoguelikeGadgetInfo
 */
exports.RoguelikeGadgetInfo = new RoguelikeGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NightCrowGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NightCrowGadgetInfo", [
            { no: 1, name: "argument_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { argumentList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 argument_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.argumentList.push(reader.uint32());
                    else
                        message.argumentList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 argument_list = 1; */
        for (let i = 0; i < message.argumentList.length; i++)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.argumentList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NightCrowGadgetInfo
 */
exports.NightCrowGadgetInfo = new NightCrowGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeshretObeliskGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeshretObeliskGadgetInfo", [
            { no: 1, name: "argument_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { argumentList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 argument_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.argumentList.push(reader.uint32());
                    else
                        message.argumentList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 argument_list = 1; */
        for (let i = 0; i < message.argumentList.length; i++)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.argumentList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeshretObeliskGadgetInfo
 */
exports.DeshretObeliskGadgetInfo = new DeshretObeliskGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGadgetInfo", [
            { no: 1, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "born_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GadgetBornType", GadgetBornType] },
            { no: 6, name: "gadget_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gadget_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_show_cutscene", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_enable_interact", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "interact_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "mark_flag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 22, name: "prop_owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 23, name: "platform", kind: "message", T: () => exports.PlatformInfo },
            { no: 24, name: "interact_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 25, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 26, name: "gadget_talk_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 100, name: "play_info", kind: "message", T: () => exports.GadgetPlayInfo },
            { no: 12, name: "trifle_item", kind: "message", oneof: "content", T: () => exports.Item },
            { no: 13, name: "gather_gadget", kind: "message", oneof: "content", T: () => exports.GatherGadgetInfo },
            { no: 14, name: "worktop", kind: "message", oneof: "content", T: () => exports.WorktopInfo },
            { no: 15, name: "client_gadget", kind: "message", oneof: "content", T: () => exports.ClientGadgetInfo },
            { no: 17, name: "weather", kind: "message", oneof: "content", T: () => exports.WeatherInfo },
            { no: 18, name: "ability_gadget", kind: "message", oneof: "content", T: () => exports.AbilityGadgetInfo },
            { no: 19, name: "statue_gadget", kind: "message", oneof: "content", T: () => exports.StatueGadgetInfo },
            { no: 20, name: "boss_chest", kind: "message", oneof: "content", T: () => exports.BossChestInfo },
            { no: 41, name: "blossom_chest", kind: "message", oneof: "content", T: () => exports.BlossomChestInfo },
            { no: 42, name: "mp_play_reward", kind: "message", oneof: "content", T: () => exports.MpPlayRewardInfo },
            { no: 43, name: "general_reward", kind: "message", oneof: "content", T: () => exports.GadgetGeneralRewardInfo },
            { no: 44, name: "offering_info", kind: "message", oneof: "content", T: () => exports.OfferingInfo },
            { no: 45, name: "foundation_info", kind: "message", oneof: "content", T: () => exports.FoundationInfo },
            { no: 46, name: "vehicle_info", kind: "message", oneof: "content", T: () => exports.VehicleInfo },
            { no: 47, name: "shell_info", kind: "message", oneof: "content", T: () => exports.EchoShellInfo },
            { no: 48, name: "screen_info", kind: "message", oneof: "content", T: () => exports.ScreenInfo },
            { no: 59, name: "fish_pool_info", kind: "message", oneof: "content", T: () => exports.FishPoolInfo },
            { no: 60, name: "custom_gadget_tree_info", kind: "message", oneof: "content", T: () => exports.CustomGadgetTreeInfo },
            { no: 61, name: "roguelike_gadget_info", kind: "message", oneof: "content", T: () => exports.RoguelikeGadgetInfo },
            { no: 62, name: "night_crow_gadget_info", kind: "message", oneof: "content", T: () => exports.NightCrowGadgetInfo },
            { no: 63, name: "deshret_obelisk_gadget_info", kind: "message", oneof: "content", T: () => exports.DeshretObeliskGadgetInfo }
        ]);
    }
    create(value) {
        const message = { interactUidList: [], content: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_id */ 1:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 owner_entity_id */ 4:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GadgetBornType born_type */ 5:
                    message.bornType = reader.int32();
                    break;
                case /* optional uint32 gadget_state */ 6:
                    message.gadgetState = reader.uint32();
                    break;
                case /* optional uint32 gadget_type */ 7:
                    message.gadgetType = reader.uint32();
                    break;
                case /* optional bool is_show_cutscene */ 8:
                    message.isShowCutscene = reader.bool();
                    break;
                case /* optional uint32 authority_peer_id */ 9:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional bool is_enable_interact */ 10:
                    message.isEnableInteract = reader.bool();
                    break;
                case /* optional uint32 interact_id */ 11:
                    message.interactId = reader.uint32();
                    break;
                case /* optional uint32 mark_flag */ 21:
                    message.markFlag = reader.uint32();
                    break;
                case /* optional uint32 prop_owner_entity_id */ 22:
                    message.propOwnerEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlatformInfo platform */ 23:
                    message.platform = exports.PlatformInfo.internalBinaryRead(reader, reader.uint32(), options, message.platform);
                    break;
                case /* repeated uint32 interact_uid_list */ 24:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.interactUidList.push(reader.uint32());
                    else
                        message.interactUidList.push(reader.uint32());
                    break;
                case /* optional uint32 draft_id */ 25:
                    message.draftId = reader.uint32();
                    break;
                case /* optional uint32 gadget_talk_state */ 26:
                    message.gadgetTalkState = reader.uint32();
                    break;
                case /* optional com.midnights.game.GadgetPlayInfo play_info */ 100:
                    message.playInfo = exports.GadgetPlayInfo.internalBinaryRead(reader, reader.uint32(), options, message.playInfo);
                    break;
                case /* com.midnights.game.Item trifle_item */ 12:
                    message.content = {
                        oneofKind: "trifleItem",
                        trifleItem: exports.Item.internalBinaryRead(reader, reader.uint32(), options, message.content.trifleItem)
                    };
                    break;
                case /* com.midnights.game.GatherGadgetInfo gather_gadget */ 13:
                    message.content = {
                        oneofKind: "gatherGadget",
                        gatherGadget: exports.GatherGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.gatherGadget)
                    };
                    break;
                case /* com.midnights.game.WorktopInfo worktop */ 14:
                    message.content = {
                        oneofKind: "worktop",
                        worktop: exports.WorktopInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.worktop)
                    };
                    break;
                case /* com.midnights.game.ClientGadgetInfo client_gadget */ 15:
                    message.content = {
                        oneofKind: "clientGadget",
                        clientGadget: exports.ClientGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.clientGadget)
                    };
                    break;
                case /* com.midnights.game.WeatherInfo weather */ 17:
                    message.content = {
                        oneofKind: "weather",
                        weather: exports.WeatherInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.weather)
                    };
                    break;
                case /* com.midnights.game.AbilityGadgetInfo ability_gadget */ 18:
                    message.content = {
                        oneofKind: "abilityGadget",
                        abilityGadget: exports.AbilityGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.abilityGadget)
                    };
                    break;
                case /* com.midnights.game.StatueGadgetInfo statue_gadget */ 19:
                    message.content = {
                        oneofKind: "statueGadget",
                        statueGadget: exports.StatueGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.statueGadget)
                    };
                    break;
                case /* com.midnights.game.BossChestInfo boss_chest */ 20:
                    message.content = {
                        oneofKind: "bossChest",
                        bossChest: exports.BossChestInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.bossChest)
                    };
                    break;
                case /* com.midnights.game.BlossomChestInfo blossom_chest */ 41:
                    message.content = {
                        oneofKind: "blossomChest",
                        blossomChest: exports.BlossomChestInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.blossomChest)
                    };
                    break;
                case /* com.midnights.game.MpPlayRewardInfo mp_play_reward */ 42:
                    message.content = {
                        oneofKind: "mpPlayReward",
                        mpPlayReward: exports.MpPlayRewardInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.mpPlayReward)
                    };
                    break;
                case /* com.midnights.game.GadgetGeneralRewardInfo general_reward */ 43:
                    message.content = {
                        oneofKind: "generalReward",
                        generalReward: exports.GadgetGeneralRewardInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.generalReward)
                    };
                    break;
                case /* com.midnights.game.OfferingInfo offering_info */ 44:
                    message.content = {
                        oneofKind: "offeringInfo",
                        offeringInfo: exports.OfferingInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.offeringInfo)
                    };
                    break;
                case /* com.midnights.game.FoundationInfo foundation_info */ 45:
                    message.content = {
                        oneofKind: "foundationInfo",
                        foundationInfo: exports.FoundationInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.foundationInfo)
                    };
                    break;
                case /* com.midnights.game.VehicleInfo vehicle_info */ 46:
                    message.content = {
                        oneofKind: "vehicleInfo",
                        vehicleInfo: exports.VehicleInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.vehicleInfo)
                    };
                    break;
                case /* com.midnights.game.EchoShellInfo shell_info */ 47:
                    message.content = {
                        oneofKind: "shellInfo",
                        shellInfo: exports.EchoShellInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.shellInfo)
                    };
                    break;
                case /* com.midnights.game.ScreenInfo screen_info */ 48:
                    message.content = {
                        oneofKind: "screenInfo",
                        screenInfo: exports.ScreenInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.screenInfo)
                    };
                    break;
                case /* com.midnights.game.FishPoolInfo fish_pool_info */ 59:
                    message.content = {
                        oneofKind: "fishPoolInfo",
                        fishPoolInfo: exports.FishPoolInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.fishPoolInfo)
                    };
                    break;
                case /* com.midnights.game.CustomGadgetTreeInfo custom_gadget_tree_info */ 60:
                    message.content = {
                        oneofKind: "customGadgetTreeInfo",
                        customGadgetTreeInfo: exports.CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.customGadgetTreeInfo)
                    };
                    break;
                case /* com.midnights.game.RoguelikeGadgetInfo roguelike_gadget_info */ 61:
                    message.content = {
                        oneofKind: "roguelikeGadgetInfo",
                        roguelikeGadgetInfo: exports.RoguelikeGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.roguelikeGadgetInfo)
                    };
                    break;
                case /* com.midnights.game.NightCrowGadgetInfo night_crow_gadget_info */ 62:
                    message.content = {
                        oneofKind: "nightCrowGadgetInfo",
                        nightCrowGadgetInfo: exports.NightCrowGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.nightCrowGadgetInfo)
                    };
                    break;
                case /* com.midnights.game.DeshretObeliskGadgetInfo deshret_obelisk_gadget_info */ 63:
                    message.content = {
                        oneofKind: "deshretObeliskGadgetInfo",
                        deshretObeliskGadgetInfo: exports.DeshretObeliskGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.deshretObeliskGadgetInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_id = 1; */
        if (message.gadgetId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 group_id = 2; */
        if (message.groupId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.groupId);
        /* optional uint32 config_id = 3; */
        if (message.configId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.configId);
        /* optional uint32 owner_entity_id = 4; */
        if (message.ownerEntityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* optional com.midnights.game.GadgetBornType born_type = 5; */
        if (message.bornType !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.bornType);
        /* optional uint32 gadget_state = 6; */
        if (message.gadgetState !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.gadgetState);
        /* optional uint32 gadget_type = 7; */
        if (message.gadgetType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.gadgetType);
        /* optional bool is_show_cutscene = 8; */
        if (message.isShowCutscene !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isShowCutscene);
        /* optional uint32 authority_peer_id = 9; */
        if (message.authorityPeerId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        /* optional bool is_enable_interact = 10; */
        if (message.isEnableInteract !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isEnableInteract);
        /* optional uint32 interact_id = 11; */
        if (message.interactId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.interactId);
        /* optional uint32 mark_flag = 21; */
        if (message.markFlag !== undefined)
            writer.tag(21, runtime_2.WireType.Varint).uint32(message.markFlag);
        /* optional uint32 prop_owner_entity_id = 22; */
        if (message.propOwnerEntityId !== undefined)
            writer.tag(22, runtime_2.WireType.Varint).uint32(message.propOwnerEntityId);
        /* optional com.midnights.game.PlatformInfo platform = 23; */
        if (message.platform)
            exports.PlatformInfo.internalBinaryWrite(message.platform, writer.tag(23, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 interact_uid_list = 24; */
        for (let i = 0; i < message.interactUidList.length; i++)
            writer.tag(24, runtime_2.WireType.Varint).uint32(message.interactUidList[i]);
        /* optional uint32 draft_id = 25; */
        if (message.draftId !== undefined)
            writer.tag(25, runtime_2.WireType.Varint).uint32(message.draftId);
        /* optional uint32 gadget_talk_state = 26; */
        if (message.gadgetTalkState !== undefined)
            writer.tag(26, runtime_2.WireType.Varint).uint32(message.gadgetTalkState);
        /* optional com.midnights.game.GadgetPlayInfo play_info = 100; */
        if (message.playInfo)
            exports.GadgetPlayInfo.internalBinaryWrite(message.playInfo, writer.tag(100, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.Item trifle_item = 12; */
        if (message.content.oneofKind === "trifleItem")
            exports.Item.internalBinaryWrite(message.content.trifleItem, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GatherGadgetInfo gather_gadget = 13; */
        if (message.content.oneofKind === "gatherGadget")
            exports.GatherGadgetInfo.internalBinaryWrite(message.content.gatherGadget, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WorktopInfo worktop = 14; */
        if (message.content.oneofKind === "worktop")
            exports.WorktopInfo.internalBinaryWrite(message.content.worktop, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.ClientGadgetInfo client_gadget = 15; */
        if (message.content.oneofKind === "clientGadget")
            exports.ClientGadgetInfo.internalBinaryWrite(message.content.clientGadget, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WeatherInfo weather = 17; */
        if (message.content.oneofKind === "weather")
            exports.WeatherInfo.internalBinaryWrite(message.content.weather, writer.tag(17, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.AbilityGadgetInfo ability_gadget = 18; */
        if (message.content.oneofKind === "abilityGadget")
            exports.AbilityGadgetInfo.internalBinaryWrite(message.content.abilityGadget, writer.tag(18, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.StatueGadgetInfo statue_gadget = 19; */
        if (message.content.oneofKind === "statueGadget")
            exports.StatueGadgetInfo.internalBinaryWrite(message.content.statueGadget, writer.tag(19, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.BossChestInfo boss_chest = 20; */
        if (message.content.oneofKind === "bossChest")
            exports.BossChestInfo.internalBinaryWrite(message.content.bossChest, writer.tag(20, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.BlossomChestInfo blossom_chest = 41; */
        if (message.content.oneofKind === "blossomChest")
            exports.BlossomChestInfo.internalBinaryWrite(message.content.blossomChest, writer.tag(41, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MpPlayRewardInfo mp_play_reward = 42; */
        if (message.content.oneofKind === "mpPlayReward")
            exports.MpPlayRewardInfo.internalBinaryWrite(message.content.mpPlayReward, writer.tag(42, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GadgetGeneralRewardInfo general_reward = 43; */
        if (message.content.oneofKind === "generalReward")
            exports.GadgetGeneralRewardInfo.internalBinaryWrite(message.content.generalReward, writer.tag(43, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.OfferingInfo offering_info = 44; */
        if (message.content.oneofKind === "offeringInfo")
            exports.OfferingInfo.internalBinaryWrite(message.content.offeringInfo, writer.tag(44, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.FoundationInfo foundation_info = 45; */
        if (message.content.oneofKind === "foundationInfo")
            exports.FoundationInfo.internalBinaryWrite(message.content.foundationInfo, writer.tag(45, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.VehicleInfo vehicle_info = 46; */
        if (message.content.oneofKind === "vehicleInfo")
            exports.VehicleInfo.internalBinaryWrite(message.content.vehicleInfo, writer.tag(46, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.EchoShellInfo shell_info = 47; */
        if (message.content.oneofKind === "shellInfo")
            exports.EchoShellInfo.internalBinaryWrite(message.content.shellInfo, writer.tag(47, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.ScreenInfo screen_info = 48; */
        if (message.content.oneofKind === "screenInfo")
            exports.ScreenInfo.internalBinaryWrite(message.content.screenInfo, writer.tag(48, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.FishPoolInfo fish_pool_info = 59; */
        if (message.content.oneofKind === "fishPoolInfo")
            exports.FishPoolInfo.internalBinaryWrite(message.content.fishPoolInfo, writer.tag(59, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.CustomGadgetTreeInfo custom_gadget_tree_info = 60; */
        if (message.content.oneofKind === "customGadgetTreeInfo")
            exports.CustomGadgetTreeInfo.internalBinaryWrite(message.content.customGadgetTreeInfo, writer.tag(60, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.RoguelikeGadgetInfo roguelike_gadget_info = 61; */
        if (message.content.oneofKind === "roguelikeGadgetInfo")
            exports.RoguelikeGadgetInfo.internalBinaryWrite(message.content.roguelikeGadgetInfo, writer.tag(61, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.NightCrowGadgetInfo night_crow_gadget_info = 62; */
        if (message.content.oneofKind === "nightCrowGadgetInfo")
            exports.NightCrowGadgetInfo.internalBinaryWrite(message.content.nightCrowGadgetInfo, writer.tag(62, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.DeshretObeliskGadgetInfo deshret_obelisk_gadget_info = 63; */
        if (message.content.oneofKind === "deshretObeliskGadgetInfo")
            exports.DeshretObeliskGadgetInfo.internalBinaryWrite(message.content.deshretObeliskGadgetInfo, writer.tag(63, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGadgetInfo
 */
exports.SceneGadgetInfo = new SceneGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AnimatorParameterValueInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AnimatorParameterValueInfo", [
            { no: 1, name: "para_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "int_val", kind: "scalar", oneof: "paraVal", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "float_val", kind: "scalar", oneof: "paraVal", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "bool_val", kind: "scalar", oneof: "paraVal", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { paraVal: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 para_type */ 1:
                    message.paraType = reader.uint32();
                    break;
                case /* int32 int_val */ 2:
                    message.paraVal = {
                        oneofKind: "intVal",
                        intVal: reader.int32()
                    };
                    break;
                case /* float float_val */ 3:
                    message.paraVal = {
                        oneofKind: "floatVal",
                        floatVal: reader.float()
                    };
                    break;
                case /* bool bool_val */ 4:
                    message.paraVal = {
                        oneofKind: "boolVal",
                        boolVal: reader.bool()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 para_type = 1; */
        if (message.paraType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.paraType);
        /* int32 int_val = 2; */
        if (message.paraVal.oneofKind === "intVal")
            writer.tag(2, runtime_2.WireType.Varint).int32(message.paraVal.intVal);
        /* float float_val = 3; */
        if (message.paraVal.oneofKind === "floatVal")
            writer.tag(3, runtime_2.WireType.Bit32).float(message.paraVal.floatVal);
        /* bool bool_val = 4; */
        if (message.paraVal.oneofKind === "boolVal")
            writer.tag(4, runtime_2.WireType.Varint).bool(message.paraVal.boolVal);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AnimatorParameterValueInfo
 */
exports.AnimatorParameterValueInfo = new AnimatorParameterValueInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServantInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServantInfo", [
            { no: 1, name: "master_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "born_slot_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 master_entity_id */ 1:
                    message.masterEntityId = reader.uint32();
                    break;
                case /* optional uint32 born_slot_index */ 2:
                    message.bornSlotIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 master_entity_id = 1; */
        if (message.masterEntityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.masterEntityId);
        /* optional uint32 born_slot_index = 2; */
        if (message.bornSlotIndex !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.bornSlotIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServantInfo
 */
exports.ServantInfo = new ServantInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityAiInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityAiInfo", [
            { no: 1, name: "is_ai_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "born_pos", kind: "message", T: () => exports.Vector },
            { no: 3, name: "skill_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "servant_info", kind: "message", T: () => exports.ServantInfo },
            { no: 5, name: "ai_threat_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 6, name: "skill_group_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "cur_tactic", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillCdMap: {}, aiThreatMap: {}, skillGroupCdMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_ai_open */ 1:
                    message.isAiOpen = reader.bool();
                    break;
                case /* optional com.midnights.game.Vector born_pos */ 2:
                    message.bornPos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornPos);
                    break;
                case /* map<uint32, uint32> skill_cd_map */ 3:
                    this.binaryReadMap3(message.skillCdMap, reader, options);
                    break;
                case /* optional com.midnights.game.ServantInfo servant_info */ 4:
                    message.servantInfo = exports.ServantInfo.internalBinaryRead(reader, reader.uint32(), options, message.servantInfo);
                    break;
                case /* map<uint32, uint32> ai_threat_map */ 5:
                    this.binaryReadMap5(message.aiThreatMap, reader, options);
                    break;
                case /* map<uint32, uint32> skill_group_cd_map */ 6:
                    this.binaryReadMap6(message.skillGroupCdMap, reader, options);
                    break;
                case /* optional uint32 cur_tactic */ 7:
                    message.curTactic = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneEntityAiInfo.skill_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneEntityAiInfo.ai_threat_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneEntityAiInfo.skill_group_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_ai_open = 1; */
        if (message.isAiOpen !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isAiOpen);
        /* optional com.midnights.game.Vector born_pos = 2; */
        if (message.bornPos)
            exports.Vector.internalBinaryWrite(message.bornPos, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> skill_cd_map = 3; */
        for (let k of Object.keys(message.skillCdMap))
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillCdMap[k]).join();
        /* optional com.midnights.game.ServantInfo servant_info = 4; */
        if (message.servantInfo)
            exports.ServantInfo.internalBinaryWrite(message.servantInfo, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> ai_threat_map = 5; */
        for (let k of Object.keys(message.aiThreatMap))
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.aiThreatMap[k]).join();
        /* map<uint32, uint32> skill_group_cd_map = 6; */
        for (let k of Object.keys(message.skillGroupCdMap))
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillGroupCdMap[k]).join();
        /* optional uint32 cur_tactic = 7; */
        if (message.curTactic !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.curTactic);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityAiInfo
 */
exports.SceneEntityAiInfo = new SceneEntityAiInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityRendererChangedInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityRendererChangedInfo", [
            { no: 1, name: "changed_renderers", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "visibility_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_cached", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { changedRenderers: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, uint32> changed_renderers */ 1:
                    this.binaryReadMap1(message.changedRenderers, reader, options);
                    break;
                case /* optional uint32 visibility_count */ 2:
                    message.visibilityCount = reader.uint32();
                    break;
                case /* optional bool is_cached */ 3:
                    message.isCached = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.EntityRendererChangedInfo.changed_renderers");
            }
        }
        map[key ?? ""] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, uint32> changed_renderers = 1; */
        for (let k of Object.keys(message.changedRenderers))
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k).tag(2, runtime_2.WireType.Varint).uint32(message.changedRenderers[k]).join();
        /* optional uint32 visibility_count = 2; */
        if (message.visibilityCount !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.visibilityCount);
        /* optional bool is_cached = 3; */
        if (message.isCached !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isCached);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityRendererChangedInfo
 */
exports.EntityRendererChangedInfo = new EntityRendererChangedInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PropPair$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PropPair", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prop_value", kind: "message", T: () => exports.PropValue }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 type */ 1:
                    message.type = reader.uint32();
                    break;
                case /* optional com.midnights.game.PropValue prop_value */ 2:
                    message.propValue = exports.PropValue.internalBinaryRead(reader, reader.uint32(), options, message.propValue);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.type);
        /* optional com.midnights.game.PropValue prop_value = 2; */
        if (message.propValue)
            exports.PropValue.internalBinaryWrite(message.propValue, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PropPair
 */
exports.PropPair = new PropPair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FightPropPair$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FightPropPair", [
            { no: 1, name: "prop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prop_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 prop_type */ 1:
                    message.propType = reader.uint32();
                    break;
                case /* optional float prop_value */ 2:
                    message.propValue = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 prop_type = 1; */
        if (message.propType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.propType);
        /* optional float prop_value = 2; */
        if (message.propValue !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.propValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FightPropPair
 */
exports.FightPropPair = new FightPropPair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AnimatorParameterValueInfoPair$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AnimatorParameterValueInfoPair", [
            { no: 1, name: "name_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "animator_para", kind: "message", T: () => exports.AnimatorParameterValueInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 name_id */ 1:
                    message.nameId = reader.int32();
                    break;
                case /* optional com.midnights.game.AnimatorParameterValueInfo animator_para */ 2:
                    message.animatorPara = exports.AnimatorParameterValueInfo.internalBinaryRead(reader, reader.uint32(), options, message.animatorPara);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 name_id = 1; */
        if (message.nameId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.nameId);
        /* optional com.midnights.game.AnimatorParameterValueInfo animator_para = 2; */
        if (message.animatorPara)
            exports.AnimatorParameterValueInfo.internalBinaryWrite(message.animatorPara, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AnimatorParameterValueInfoPair
 */
exports.AnimatorParameterValueInfoPair = new AnimatorParameterValueInfoPair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityEnvironmentInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityEnvironmentInfo", [
            { no: 1, name: "json_climate_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "climate_area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 json_climate_type */ 1:
                    message.jsonClimateType = reader.uint32();
                    break;
                case /* optional uint32 climate_area_id */ 2:
                    message.climateAreaId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 json_climate_type = 1; */
        if (message.jsonClimateType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.jsonClimateType);
        /* optional uint32 climate_area_id = 2; */
        if (message.climateAreaId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.climateAreaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityEnvironmentInfo
 */
exports.EntityEnvironmentInfo = new EntityEnvironmentInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityClientExtraInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityClientExtraInfo", [
            { no: 1, name: "skill_anchor_position", kind: "message", T: () => exports.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector skill_anchor_position */ 1:
                    message.skillAnchorPosition = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.skillAnchorPosition);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector skill_anchor_position = 1; */
        if (message.skillAnchorPosition)
            exports.Vector.internalBinaryWrite(message.skillAnchorPosition, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityClientExtraInfo
 */
exports.EntityClientExtraInfo = new EntityClientExtraInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityAuthorityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityAuthorityInfo", [
            { no: 1, name: "ability_info", kind: "message", T: () => exports.AbilitySyncStateInfo },
            { no: 2, name: "renderer_changed_info", kind: "message", T: () => exports.EntityRendererChangedInfo },
            { no: 3, name: "ai_info", kind: "message", T: () => exports.SceneEntityAiInfo },
            { no: 4, name: "born_pos", kind: "message", T: () => exports.Vector },
            { no: 5, name: "pose_para_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AnimatorParameterValueInfoPair },
            { no: 6, name: "client_extra_info", kind: "message", T: () => exports.EntityClientExtraInfo }
        ]);
    }
    create(value) {
        const message = { poseParaList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilitySyncStateInfo ability_info */ 1:
                    message.abilityInfo = exports.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
                    break;
                case /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info */ 2:
                    message.rendererChangedInfo = exports.EntityRendererChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.rendererChangedInfo);
                    break;
                case /* optional com.midnights.game.SceneEntityAiInfo ai_info */ 3:
                    message.aiInfo = exports.SceneEntityAiInfo.internalBinaryRead(reader, reader.uint32(), options, message.aiInfo);
                    break;
                case /* optional com.midnights.game.Vector born_pos */ 4:
                    message.bornPos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornPos);
                    break;
                case /* repeated com.midnights.game.AnimatorParameterValueInfoPair pose_para_list */ 5:
                    message.poseParaList.push(exports.AnimatorParameterValueInfoPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.EntityClientExtraInfo client_extra_info */ 6:
                    message.clientExtraInfo = exports.EntityClientExtraInfo.internalBinaryRead(reader, reader.uint32(), options, message.clientExtraInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilitySyncStateInfo ability_info = 1; */
        if (message.abilityInfo)
            exports.AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info = 2; */
        if (message.rendererChangedInfo)
            exports.EntityRendererChangedInfo.internalBinaryWrite(message.rendererChangedInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.SceneEntityAiInfo ai_info = 3; */
        if (message.aiInfo)
            exports.SceneEntityAiInfo.internalBinaryWrite(message.aiInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector born_pos = 4; */
        if (message.bornPos)
            exports.Vector.internalBinaryWrite(message.bornPos, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AnimatorParameterValueInfoPair pose_para_list = 5; */
        for (let i = 0; i < message.poseParaList.length; i++)
            exports.AnimatorParameterValueInfoPair.internalBinaryWrite(message.poseParaList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.EntityClientExtraInfo client_extra_info = 6; */
        if (message.clientExtraInfo)
            exports.EntityClientExtraInfo.internalBinaryWrite(message.clientExtraInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityAuthorityInfo
 */
exports.EntityAuthorityInfo = new EntityAuthorityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityInfo", [
            { no: 1, name: "entity_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ProtEntityType", ProtEntityType] },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "motion_info", kind: "message", T: () => exports.MotionInfo },
            { no: 5, name: "prop_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.PropPair },
            { no: 6, name: "fight_prop_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.FightPropPair },
            { no: 7, name: "life_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "animator_para_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AnimatorParameterValueInfoPair },
            { no: 17, name: "last_move_scene_time_ms", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "last_move_reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "entity_client_data", kind: "message", T: () => exports.EntityClientData },
            { no: 20, name: "entity_environment_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.EntityEnvironmentInfo },
            { no: 21, name: "entity_authority_info", kind: "message", T: () => exports.EntityAuthorityInfo },
            { no: 22, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 23, name: "server_buff_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ServerBuff },
            { no: 10, name: "avatar", kind: "message", oneof: "entity", T: () => exports.SceneAvatarInfo },
            { no: 11, name: "monster", kind: "message", oneof: "entity", T: () => exports.SceneMonsterInfo },
            { no: 12, name: "npc", kind: "message", oneof: "entity", T: () => exports.SceneNpcInfo },
            { no: 13, name: "gadget", kind: "message", oneof: "entity", T: () => exports.SceneGadgetInfo }
        ]);
    }
    create(value) {
        const message = { propList: [], fightPropList: [], animatorParaList: [], entityEnvironmentInfoList: [], tagList: [], serverBuffList: [], entity: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ProtEntityType entity_type */ 1:
                    message.entityType = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* optional string name */ 3:
                    message.name = reader.string();
                    break;
                case /* optional com.midnights.game.MotionInfo motion_info */ 4:
                    message.motionInfo = exports.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* repeated com.midnights.game.PropPair prop_list */ 5:
                    message.propList.push(exports.PropPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.FightPropPair fight_prop_list */ 6:
                    message.fightPropList.push(exports.FightPropPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 life_state */ 7:
                    message.lifeState = reader.uint32();
                    break;
                case /* repeated com.midnights.game.AnimatorParameterValueInfoPair animator_para_list */ 9:
                    message.animatorParaList.push(exports.AnimatorParameterValueInfoPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 last_move_scene_time_ms */ 17:
                    message.lastMoveSceneTimeMs = reader.uint32();
                    break;
                case /* optional uint32 last_move_reliable_seq */ 18:
                    message.lastMoveReliableSeq = reader.uint32();
                    break;
                case /* optional com.midnights.game.EntityClientData entity_client_data */ 19:
                    message.entityClientData = exports.EntityClientData.internalBinaryRead(reader, reader.uint32(), options, message.entityClientData);
                    break;
                case /* repeated com.midnights.game.EntityEnvironmentInfo entity_environment_info_list */ 20:
                    message.entityEnvironmentInfoList.push(exports.EntityEnvironmentInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.EntityAuthorityInfo entity_authority_info */ 21:
                    message.entityAuthorityInfo = exports.EntityAuthorityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityAuthorityInfo);
                    break;
                case /* repeated string tag_list */ 22:
                    message.tagList.push(reader.string());
                    break;
                case /* repeated com.midnights.game.ServerBuff server_buff_list */ 23:
                    message.serverBuffList.push(exports.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* com.midnights.game.SceneAvatarInfo avatar */ 10:
                    message.entity = {
                        oneofKind: "avatar",
                        avatar: exports.SceneAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.avatar)
                    };
                    break;
                case /* com.midnights.game.SceneMonsterInfo monster */ 11:
                    message.entity = {
                        oneofKind: "monster",
                        monster: exports.SceneMonsterInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.monster)
                    };
                    break;
                case /* com.midnights.game.SceneNpcInfo npc */ 12:
                    message.entity = {
                        oneofKind: "npc",
                        npc: exports.SceneNpcInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.npc)
                    };
                    break;
                case /* com.midnights.game.SceneGadgetInfo gadget */ 13:
                    message.entity = {
                        oneofKind: "gadget",
                        gadget: exports.SceneGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.gadget)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ProtEntityType entity_type = 1; */
        if (message.entityType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.entityType);
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional string name = 3; */
        if (message.name !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.name);
        /* optional com.midnights.game.MotionInfo motion_info = 4; */
        if (message.motionInfo)
            exports.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.PropPair prop_list = 5; */
        for (let i = 0; i < message.propList.length; i++)
            exports.PropPair.internalBinaryWrite(message.propList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.FightPropPair fight_prop_list = 6; */
        for (let i = 0; i < message.fightPropList.length; i++)
            exports.FightPropPair.internalBinaryWrite(message.fightPropList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 life_state = 7; */
        if (message.lifeState !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.lifeState);
        /* repeated com.midnights.game.AnimatorParameterValueInfoPair animator_para_list = 9; */
        for (let i = 0; i < message.animatorParaList.length; i++)
            exports.AnimatorParameterValueInfoPair.internalBinaryWrite(message.animatorParaList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 last_move_scene_time_ms = 17; */
        if (message.lastMoveSceneTimeMs !== undefined)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.lastMoveSceneTimeMs);
        /* optional uint32 last_move_reliable_seq = 18; */
        if (message.lastMoveReliableSeq !== undefined)
            writer.tag(18, runtime_2.WireType.Varint).uint32(message.lastMoveReliableSeq);
        /* optional com.midnights.game.EntityClientData entity_client_data = 19; */
        if (message.entityClientData)
            exports.EntityClientData.internalBinaryWrite(message.entityClientData, writer.tag(19, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.EntityEnvironmentInfo entity_environment_info_list = 20; */
        for (let i = 0; i < message.entityEnvironmentInfoList.length; i++)
            exports.EntityEnvironmentInfo.internalBinaryWrite(message.entityEnvironmentInfoList[i], writer.tag(20, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.EntityAuthorityInfo entity_authority_info = 21; */
        if (message.entityAuthorityInfo)
            exports.EntityAuthorityInfo.internalBinaryWrite(message.entityAuthorityInfo, writer.tag(21, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated string tag_list = 22; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(22, runtime_2.WireType.LengthDelimited).string(message.tagList[i]);
        /* repeated com.midnights.game.ServerBuff server_buff_list = 23; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            exports.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(23, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneAvatarInfo avatar = 10; */
        if (message.entity.oneofKind === "avatar")
            exports.SceneAvatarInfo.internalBinaryWrite(message.entity.avatar, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneMonsterInfo monster = 11; */
        if (message.entity.oneofKind === "monster")
            exports.SceneMonsterInfo.internalBinaryWrite(message.entity.monster, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneNpcInfo npc = 12; */
        if (message.entity.oneofKind === "npc")
            exports.SceneNpcInfo.internalBinaryWrite(message.entity.npc, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGadgetInfo gadget = 13; */
        if (message.entity.oneofKind === "gadget")
            exports.SceneGadgetInfo.internalBinaryWrite(message.entity.gadget, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityInfo
 */
exports.SceneEntityInfo = new SceneEntityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateGadgetInfo", [
            { no: 1, name: "born_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GadgetBornType", GadgetBornType] },
            { no: 2, name: "chest", kind: "message", T: () => exports.CreateGadgetInfo_Chest }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GadgetBornType born_type */ 1:
                    message.bornType = reader.int32();
                    break;
                case /* optional com.midnights.game.CreateGadgetInfo.Chest chest */ 2:
                    message.chest = exports.CreateGadgetInfo_Chest.internalBinaryRead(reader, reader.uint32(), options, message.chest);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GadgetBornType born_type = 1; */
        if (message.bornType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.bornType);
        /* optional com.midnights.game.CreateGadgetInfo.Chest chest = 2; */
        if (message.chest)
            exports.CreateGadgetInfo_Chest.internalBinaryWrite(message.chest, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CreateGadgetInfo
 */
exports.CreateGadgetInfo = new CreateGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateGadgetInfo_Chest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateGadgetInfo.Chest", [
            { no: 1, name: "chest_drop_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_show_cutscene", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 chest_drop_id */ 1:
                    message.chestDropId = reader.uint32();
                    break;
                case /* optional bool is_show_cutscene */ 2:
                    message.isShowCutscene = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 chest_drop_id = 1; */
        if (message.chestDropId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.chestDropId);
        /* optional bool is_show_cutscene = 2; */
        if (message.isShowCutscene !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isShowCutscene);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CreateGadgetInfo.Chest
 */
exports.CreateGadgetInfo_Chest = new CreateGadgetInfo_Chest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateEntityInfo", [
            { no: 5, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "pos", kind: "message", T: () => exports.Vector },
            { no: 7, name: "rot", kind: "message", T: () => exports.Vector },
            { no: 10, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "client_unique_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "npc_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "item_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gadget", kind: "message", oneof: "entityCreateInfo", T: () => exports.CreateGadgetInfo }
        ]);
    }
    create(value) {
        const message = { entity: { oneofKind: undefined }, entityCreateInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level */ 5:
                    message.level = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 6:
                    message.pos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 7:
                    message.rot = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 room_id */ 11:
                    message.roomId = reader.uint32();
                    break;
                case /* optional uint32 client_unique_id */ 12:
                    message.clientUniqueId = reader.uint32();
                    break;
                case /* uint32 monster_id */ 1:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 npc_id */ 2:
                    message.entity = {
                        oneofKind: "npcId",
                        npcId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 3:
                    message.entity = {
                        oneofKind: "gadgetId",
                        gadgetId: reader.uint32()
                    };
                    break;
                case /* uint32 item_id */ 4:
                    message.entity = {
                        oneofKind: "itemId",
                        itemId: reader.uint32()
                    };
                    break;
                case /* com.midnights.game.CreateGadgetInfo gadget */ 13:
                    message.entityCreateInfo = {
                        oneofKind: "gadget",
                        gadget: exports.CreateGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityCreateInfo.gadget)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level = 5; */
        if (message.level !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.level);
        /* optional com.midnights.game.Vector pos = 6; */
        if (message.pos)
            exports.Vector.internalBinaryWrite(message.pos, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 7; */
        if (message.rot)
            exports.Vector.internalBinaryWrite(message.rot, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 10; */
        if (message.sceneId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 room_id = 11; */
        if (message.roomId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.roomId);
        /* optional uint32 client_unique_id = 12; */
        if (message.clientUniqueId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.clientUniqueId);
        /* uint32 monster_id = 1; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 npc_id = 2; */
        if (message.entity.oneofKind === "npcId")
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.entity.npcId);
        /* uint32 gadget_id = 3; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.entity.gadgetId);
        /* uint32 item_id = 4; */
        if (message.entity.oneofKind === "itemId")
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.entity.itemId);
        /* com.midnights.game.CreateGadgetInfo gadget = 13; */
        if (message.entityCreateInfo.oneofKind === "gadget")
            exports.CreateGadgetInfo.internalBinaryWrite(message.entityCreateInfo.gadget, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CreateEntityInfo
 */
exports.CreateEntityInfo = new CreateEntityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TrialAvatarGrantRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TrialAvatarGrantRecord", [
            { no: 1, name: "grant_reason", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "from_parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 grant_reason */ 1:
                    message.grantReason = reader.uint32();
                    break;
                case /* optional uint32 from_parent_quest_id */ 2:
                    message.fromParentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 grant_reason = 1; */
        if (message.grantReason !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.grantReason);
        /* optional uint32 from_parent_quest_id = 2; */
        if (message.fromParentQuestId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fromParentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TrialAvatarGrantRecord
 */
exports.TrialAvatarGrantRecord = new TrialAvatarGrantRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TrialAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TrialAvatarInfo", [
            { no: 1, name: "trial_avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "trial_equip_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.Item },
            { no: 3, name: "grant_record", kind: "message", T: () => exports.TrialAvatarGrantRecord }
        ]);
    }
    create(value) {
        const message = { trialEquipList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 trial_avatar_id */ 1:
                    message.trialAvatarId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.Item trial_equip_list */ 2:
                    message.trialEquipList.push(exports.Item.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.TrialAvatarGrantRecord grant_record */ 3:
                    message.grantRecord = exports.TrialAvatarGrantRecord.internalBinaryRead(reader, reader.uint32(), options, message.grantRecord);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 trial_avatar_id = 1; */
        if (message.trialAvatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.trialAvatarId);
        /* repeated com.midnights.game.Item trial_equip_list = 2; */
        for (let i = 0; i < message.trialEquipList.length; i++)
            exports.Item.internalBinaryWrite(message.trialEquipList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.TrialAvatarGrantRecord grant_record = 3; */
        if (message.grantRecord)
            exports.TrialAvatarGrantRecord.internalBinaryWrite(message.grantRecord, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TrialAvatarInfo
 */
exports.TrialAvatarInfo = new TrialAvatarInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSkillInfo", [
            { no: 1, name: "pass_cd_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "full_cd_time_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "max_charge_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fullCdTimeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 pass_cd_time */ 1:
                    message.passCdTime = reader.uint32();
                    break;
                case /* repeated uint32 full_cd_time_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fullCdTimeList.push(reader.uint32());
                    else
                        message.fullCdTimeList.push(reader.uint32());
                    break;
                case /* optional uint32 max_charge_count */ 3:
                    message.maxChargeCount = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 pass_cd_time = 1; */
        if (message.passCdTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.passCdTime);
        /* repeated uint32 full_cd_time_list = 2; */
        for (let i = 0; i < message.fullCdTimeList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fullCdTimeList[i]);
        /* optional uint32 max_charge_count = 3; */
        if (message.maxChargeCount !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.maxChargeCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSkillInfo
 */
exports.AvatarSkillInfo = new AvatarSkillInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FetterData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FetterData", [
            { no: 1, name: "fetter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fetter_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cond_index_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { condIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 fetter_id */ 1:
                    message.fetterId = reader.uint32();
                    break;
                case /* optional uint32 fetter_state */ 2:
                    message.fetterState = reader.uint32();
                    break;
                case /* repeated uint32 cond_index_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.condIndexList.push(reader.uint32());
                    else
                        message.condIndexList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 fetter_id = 1; */
        if (message.fetterId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.fetterId);
        /* optional uint32 fetter_state = 2; */
        if (message.fetterState !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fetterState);
        /* repeated uint32 cond_index_list = 3; */
        for (let i = 0; i < message.condIndexList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.condIndexList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FetterData
 */
exports.FetterData = new FetterData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFetterInfo", [
            { no: 1, name: "exp_number", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exp_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "open_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "finish_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "rewarded_fetter_level_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "fetter_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.FetterData }
        ]);
    }
    create(value) {
        const message = { openIdList: [], finishIdList: [], rewardedFetterLevelList: [], fetterList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 exp_number */ 1:
                    message.expNumber = reader.uint32();
                    break;
                case /* optional uint32 exp_level */ 2:
                    message.expLevel = reader.uint32();
                    break;
                case /* repeated uint32 open_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openIdList.push(reader.uint32());
                    else
                        message.openIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 finish_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishIdList.push(reader.uint32());
                    else
                        message.finishIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 rewarded_fetter_level_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardedFetterLevelList.push(reader.uint32());
                    else
                        message.rewardedFetterLevelList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.FetterData fetter_list */ 6:
                    message.fetterList.push(exports.FetterData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 exp_number = 1; */
        if (message.expNumber !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.expNumber);
        /* optional uint32 exp_level = 2; */
        if (message.expLevel !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.expLevel);
        /* repeated uint32 open_id_list = 3; */
        for (let i = 0; i < message.openIdList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.openIdList[i]);
        /* repeated uint32 finish_id_list = 4; */
        for (let i = 0; i < message.finishIdList.length; i++)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.finishIdList[i]);
        /* repeated uint32 rewarded_fetter_level_list = 5; */
        for (let i = 0; i < message.rewardedFetterLevelList.length; i++)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.rewardedFetterLevelList[i]);
        /* repeated com.midnights.game.FetterData fetter_list = 6; */
        for (let i = 0; i < message.fetterList.length; i++)
            exports.FetterData.internalBinaryWrite(message.fetterList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFetterInfo
 */
exports.AvatarFetterInfo = new AvatarFetterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionInfo", [
            { no: 1, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.AvatarExpeditionState", AvatarExpeditionState] },
            { no: 2, name: "exp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "hour_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "shorten_ratio", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AvatarExpeditionState state */ 1:
                    message.state = reader.int32();
                    break;
                case /* optional uint32 exp_id */ 2:
                    message.expId = reader.uint32();
                    break;
                case /* optional uint32 hour_time */ 3:
                    message.hourTime = reader.uint32();
                    break;
                case /* optional uint32 start_time */ 4:
                    message.startTime = reader.uint32();
                    break;
                case /* optional float shorten_ratio */ 5:
                    message.shortenRatio = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AvatarExpeditionState state = 1; */
        if (message.state !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.state);
        /* optional uint32 exp_id = 2; */
        if (message.expId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.expId);
        /* optional uint32 hour_time = 3; */
        if (message.hourTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.hourTime);
        /* optional uint32 start_time = 4; */
        if (message.startTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.startTime);
        /* optional float shorten_ratio = 5; */
        if (message.shortenRatio !== undefined)
            writer.tag(5, runtime_2.WireType.Bit32).float(message.shortenRatio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionInfo
 */
exports.AvatarExpeditionInfo = new AvatarExpeditionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEquipAffixInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarEquipAffixInfo", [
            { no: 1, name: "equip_affix_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "left_cd_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 equip_affix_id */ 1:
                    message.equipAffixId = reader.uint32();
                    break;
                case /* optional uint32 left_cd_time */ 2:
                    message.leftCdTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 equip_affix_id = 1; */
        if (message.equipAffixId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.equipAffixId);
        /* optional uint32 left_cd_time = 2; */
        if (message.leftCdTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.leftCdTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarEquipAffixInfo
 */
exports.AvatarEquipAffixInfo = new AvatarEquipAffixInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarInfo", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.PropValue } },
            { no: 4, name: "life_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "equip_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "talent_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 9, name: "trial_avatar_info", kind: "message", T: () => exports.TrialAvatarInfo },
            { no: 10, name: "skill_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.AvatarSkillInfo } },
            { no: 11, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "fetter_info", kind: "message", T: () => exports.AvatarFetterInfo },
            { no: 13, name: "core_proud_skill_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "inherent_proud_skill_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 16, name: "expedition_state", kind: "enum", opt: true, T: () => ["com.midnights.game.AvatarExpeditionState", AvatarExpeditionState] },
            { no: 17, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 18, name: "is_focus", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "avatar_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "team_resonance_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "wearing_flycloak_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 22, name: "equip_affix_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AvatarEquipAffixInfo },
            { no: 23, name: "born_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 24, name: "pending_promote_reward_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 25, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 26, name: "excel_info", kind: "message", T: () => exports.AvatarExcelInfo },
            { no: 27, name: "anim_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { propMap: {}, equipGuidList: [], talentIdList: [], fightPropMap: {}, skillMap: {}, inherentProudSkillList: [], skillLevelMap: {}, proudSkillExtraLevelMap: {}, teamResonanceList: [], equipAffixList: [], pendingPromoteRewardList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 2:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, com.midnights.game.PropValue> prop_map */ 3:
                    this.binaryReadMap3(message.propMap, reader, options);
                    break;
                case /* optional uint32 life_state */ 4:
                    message.lifeState = reader.uint32();
                    break;
                case /* repeated uint64 equip_guid_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.equipGuidList.push(reader.uint64().toBigInt());
                    else
                        message.equipGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint32 talent_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* map<uint32, float> fight_prop_map */ 7:
                    this.binaryReadMap7(message.fightPropMap, reader, options);
                    break;
                case /* optional com.midnights.game.TrialAvatarInfo trial_avatar_info */ 9:
                    message.trialAvatarInfo = exports.TrialAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.trialAvatarInfo);
                    break;
                case /* map<uint32, com.midnights.game.AvatarSkillInfo> skill_map */ 10:
                    this.binaryReadMap10(message.skillMap, reader, options);
                    break;
                case /* optional uint32 skill_depot_id */ 11:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AvatarFetterInfo fetter_info */ 12:
                    message.fetterInfo = exports.AvatarFetterInfo.internalBinaryRead(reader, reader.uint32(), options, message.fetterInfo);
                    break;
                case /* optional uint32 core_proud_skill_level */ 13:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                case /* repeated uint32 inherent_proud_skill_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.inherentProudSkillList.push(reader.uint32());
                    else
                        message.inherentProudSkillList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> skill_level_map */ 15:
                    this.binaryReadMap15(message.skillLevelMap, reader, options);
                    break;
                case /* optional com.midnights.game.AvatarExpeditionState expedition_state */ 16:
                    message.expeditionState = reader.int32();
                    break;
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 17:
                    this.binaryReadMap17(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* optional bool is_focus */ 18:
                    message.isFocus = reader.bool();
                    break;
                case /* optional uint32 avatar_type */ 19:
                    message.avatarType = reader.uint32();
                    break;
                case /* repeated uint32 team_resonance_list */ 20:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.teamResonanceList.push(reader.uint32());
                    else
                        message.teamResonanceList.push(reader.uint32());
                    break;
                case /* optional uint32 wearing_flycloak_id */ 21:
                    message.wearingFlycloakId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.AvatarEquipAffixInfo equip_affix_list */ 22:
                    message.equipAffixList.push(exports.AvatarEquipAffixInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 born_time */ 23:
                    message.bornTime = reader.uint32();
                    break;
                case /* repeated uint32 pending_promote_reward_list */ 24:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pendingPromoteRewardList.push(reader.uint32());
                    else
                        message.pendingPromoteRewardList.push(reader.uint32());
                    break;
                case /* optional uint32 costume_id */ 25:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AvatarExcelInfo excel_info */ 26:
                    message.excelInfo = exports.AvatarExcelInfo.internalBinaryRead(reader, reader.uint32(), options, message.excelInfo);
                    break;
                case /* optional uint32 anim_hash */ 27:
                    message.animHash = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarInfo.prop_map");
            }
        }
        map[key ?? 0] = val ?? exports.PropValue.create();
    }
    binaryReadMap7(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarInfo.fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.AvatarSkillInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarInfo.skill_map");
            }
        }
        map[key ?? 0] = val ?? exports.AvatarSkillInfo.create();
    }
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarInfo.skill_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap17(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarInfo.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint64 guid = 2; */
        if (message.guid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.guid);
        /* map<uint32, com.midnights.game.PropValue> prop_map = 3; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 life_state = 4; */
        if (message.lifeState !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.lifeState);
        /* repeated uint64 equip_guid_list = 5; */
        for (let i = 0; i < message.equipGuidList.length; i++)
            writer.tag(5, runtime_2.WireType.Varint).uint64(message.equipGuidList[i]);
        /* repeated uint32 talent_id_list = 6; */
        for (let i = 0; i < message.talentIdList.length; i++)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.talentIdList[i]);
        /* map<uint32, float> fight_prop_map = 7; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Bit32).float(message.fightPropMap[k]).join();
        /* optional com.midnights.game.TrialAvatarInfo trial_avatar_info = 9; */
        if (message.trialAvatarInfo)
            exports.TrialAvatarInfo.internalBinaryWrite(message.trialAvatarInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, com.midnights.game.AvatarSkillInfo> skill_map = 10; */
        for (let k of Object.keys(message.skillMap)) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.AvatarSkillInfo.internalBinaryWrite(message.skillMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 skill_depot_id = 11; */
        if (message.skillDepotId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* optional com.midnights.game.AvatarFetterInfo fetter_info = 12; */
        if (message.fetterInfo)
            exports.AvatarFetterInfo.internalBinaryWrite(message.fetterInfo, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 core_proud_skill_level = 13; */
        if (message.coreProudSkillLevel !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.coreProudSkillLevel);
        /* repeated uint32 inherent_proud_skill_list = 14; */
        for (let i = 0; i < message.inherentProudSkillList.length; i++)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.inherentProudSkillList[i]);
        /* map<uint32, uint32> skill_level_map = 15; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        /* optional com.midnights.game.AvatarExpeditionState expedition_state = 16; */
        if (message.expeditionState !== undefined)
            writer.tag(16, runtime_2.WireType.Varint).int32(message.expeditionState);
        /* map<uint32, uint32> proud_skill_extra_level_map = 17; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(17, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* optional bool is_focus = 18; */
        if (message.isFocus !== undefined)
            writer.tag(18, runtime_2.WireType.Varint).bool(message.isFocus);
        /* optional uint32 avatar_type = 19; */
        if (message.avatarType !== undefined)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.avatarType);
        /* repeated uint32 team_resonance_list = 20; */
        for (let i = 0; i < message.teamResonanceList.length; i++)
            writer.tag(20, runtime_2.WireType.Varint).uint32(message.teamResonanceList[i]);
        /* optional uint32 wearing_flycloak_id = 21; */
        if (message.wearingFlycloakId !== undefined)
            writer.tag(21, runtime_2.WireType.Varint).uint32(message.wearingFlycloakId);
        /* repeated com.midnights.game.AvatarEquipAffixInfo equip_affix_list = 22; */
        for (let i = 0; i < message.equipAffixList.length; i++)
            exports.AvatarEquipAffixInfo.internalBinaryWrite(message.equipAffixList[i], writer.tag(22, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 born_time = 23; */
        if (message.bornTime !== undefined)
            writer.tag(23, runtime_2.WireType.Varint).uint32(message.bornTime);
        /* repeated uint32 pending_promote_reward_list = 24; */
        for (let i = 0; i < message.pendingPromoteRewardList.length; i++)
            writer.tag(24, runtime_2.WireType.Varint).uint32(message.pendingPromoteRewardList[i]);
        /* optional uint32 costume_id = 25; */
        if (message.costumeId !== undefined)
            writer.tag(25, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* optional com.midnights.game.AvatarExcelInfo excel_info = 26; */
        if (message.excelInfo)
            exports.AvatarExcelInfo.internalBinaryWrite(message.excelInfo, writer.tag(26, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 anim_hash = 27; */
        if (message.animHash !== undefined)
            writer.tag(27, runtime_2.WireType.Varint).uint32(message.animHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarInfo
 */
exports.AvatarInfo = new AvatarInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowEquip$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowEquip", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reliquary", kind: "message", oneof: "detail", T: () => exports.Reliquary },
            { no: 3, name: "weapon", kind: "message", oneof: "detail", T: () => exports.Weapon }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* com.midnights.game.Reliquary reliquary */ 2:
                    message.detail = {
                        oneofKind: "reliquary",
                        reliquary: exports.Reliquary.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquary)
                    };
                    break;
                case /* com.midnights.game.Weapon weapon */ 3:
                    message.detail = {
                        oneofKind: "weapon",
                        weapon: exports.Weapon.internalBinaryRead(reader, reader.uint32(), options, message.detail.weapon)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.itemId);
        /* com.midnights.game.Reliquary reliquary = 2; */
        if (message.detail.oneofKind === "reliquary")
            exports.Reliquary.internalBinaryWrite(message.detail.reliquary, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.Weapon weapon = 3; */
        if (message.detail.oneofKind === "weapon")
            exports.Weapon.internalBinaryWrite(message.detail.weapon, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowEquip
 */
exports.ShowEquip = new ShowEquip$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowAvatarInfo", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.PropValue } },
            { no: 3, name: "talent_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 5, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "core_proud_skill_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "inherent_proud_skill_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 10, name: "equip_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ShowEquip },
            { no: 11, name: "fetter_info", kind: "message", T: () => exports.AvatarFetterInfo },
            { no: 12, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "excel_info", kind: "message", T: () => exports.AvatarExcelInfo }
        ]);
    }
    create(value) {
        const message = { propMap: {}, talentIdList: [], fightPropMap: {}, inherentProudSkillList: [], skillLevelMap: {}, proudSkillExtraLevelMap: {}, equipList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* map<uint32, com.midnights.game.PropValue> prop_map */ 2:
                    this.binaryReadMap2(message.propMap, reader, options);
                    break;
                case /* repeated uint32 talent_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* map<uint32, float> fight_prop_map */ 4:
                    this.binaryReadMap4(message.fightPropMap, reader, options);
                    break;
                case /* optional uint32 skill_depot_id */ 5:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* optional uint32 core_proud_skill_level */ 6:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                case /* repeated uint32 inherent_proud_skill_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.inherentProudSkillList.push(reader.uint32());
                    else
                        message.inherentProudSkillList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> skill_level_map */ 8:
                    this.binaryReadMap8(message.skillLevelMap, reader, options);
                    break;
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 9:
                    this.binaryReadMap9(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* repeated com.midnights.game.ShowEquip equip_list */ 10:
                    message.equipList.push(exports.ShowEquip.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.AvatarFetterInfo fetter_info */ 11:
                    message.fetterInfo = exports.AvatarFetterInfo.internalBinaryRead(reader, reader.uint32(), options, message.fetterInfo);
                    break;
                case /* optional uint32 costume_id */ 12:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AvatarExcelInfo excel_info */ 13:
                    message.excelInfo = exports.AvatarExcelInfo.internalBinaryRead(reader, reader.uint32(), options, message.excelInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.prop_map");
            }
        }
        map[key ?? 0] = val ?? exports.PropValue.create();
    }
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.skill_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* map<uint32, com.midnights.game.PropValue> prop_map = 2; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 talent_id_list = 3; */
        for (let i = 0; i < message.talentIdList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.talentIdList[i]);
        /* map<uint32, float> fight_prop_map = 4; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Bit32).float(message.fightPropMap[k]).join();
        /* optional uint32 skill_depot_id = 5; */
        if (message.skillDepotId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* optional uint32 core_proud_skill_level = 6; */
        if (message.coreProudSkillLevel !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.coreProudSkillLevel);
        /* repeated uint32 inherent_proud_skill_list = 7; */
        for (let i = 0; i < message.inherentProudSkillList.length; i++)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.inherentProudSkillList[i]);
        /* map<uint32, uint32> skill_level_map = 8; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        /* map<uint32, uint32> proud_skill_extra_level_map = 9; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* repeated com.midnights.game.ShowEquip equip_list = 10; */
        for (let i = 0; i < message.equipList.length; i++)
            exports.ShowEquip.internalBinaryWrite(message.equipList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AvatarFetterInfo fetter_info = 11; */
        if (message.fetterInfo)
            exports.AvatarFetterInfo.internalBinaryWrite(message.fetterInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 costume_id = 12; */
        if (message.costumeId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* optional com.midnights.game.AvatarExcelInfo excel_info = 13; */
        if (message.excelInfo)
            exports.AvatarExcelInfo.internalBinaryWrite(message.excelInfo, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowAvatarInfo
 */
exports.ShowAvatarInfo = new ShowAvatarInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Quest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Quest", [
            { no: 1, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_random", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "quest_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "start_game_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "accept_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "lacked_npc_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "finish_progress_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "fail_progress_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "lacked_npc_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "lacked_place_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "lacked_place_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { lackedNpcList: [], finishProgressList: [], failProgressList: [], lackedNpcMap: {}, lackedPlaceList: [], lackedPlaceMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 quest_id */ 1:
                    message.questId = reader.uint32();
                    break;
                case /* optional uint32 state */ 2:
                    message.state = reader.uint32();
                    break;
                case /* optional uint32 start_time */ 4:
                    message.startTime = reader.uint32();
                    break;
                case /* optional bool is_random */ 5:
                    message.isRandom = reader.bool();
                    break;
                case /* optional uint32 parent_quest_id */ 6:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional uint32 quest_config_id */ 7:
                    message.questConfigId = reader.uint32();
                    break;
                case /* optional uint32 start_game_time */ 8:
                    message.startGameTime = reader.uint32();
                    break;
                case /* optional uint32 accept_time */ 9:
                    message.acceptTime = reader.uint32();
                    break;
                case /* repeated uint32 lacked_npc_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedNpcList.push(reader.uint32());
                    else
                        message.lackedNpcList.push(reader.uint32());
                    break;
                case /* repeated uint32 finish_progress_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishProgressList.push(reader.uint32());
                    else
                        message.finishProgressList.push(reader.uint32());
                    break;
                case /* repeated uint32 fail_progress_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.failProgressList.push(reader.uint32());
                    else
                        message.failProgressList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> lacked_npc_map */ 13:
                    this.binaryReadMap13(message.lackedNpcMap, reader, options);
                    break;
                case /* repeated uint32 lacked_place_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedPlaceList.push(reader.uint32());
                    else
                        message.lackedPlaceList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> lacked_place_map */ 15:
                    this.binaryReadMap15(message.lackedPlaceMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap13(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.Quest.lacked_npc_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.Quest.lacked_place_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_id = 1; */
        if (message.questId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.questId);
        /* optional uint32 state = 2; */
        if (message.state !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.state);
        /* optional uint32 start_time = 4; */
        if (message.startTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.startTime);
        /* optional bool is_random = 5; */
        if (message.isRandom !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isRandom);
        /* optional uint32 parent_quest_id = 6; */
        if (message.parentQuestId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.parentQuestId);
        /* optional uint32 quest_config_id = 7; */
        if (message.questConfigId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.questConfigId);
        /* optional uint32 start_game_time = 8; */
        if (message.startGameTime !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.startGameTime);
        /* optional uint32 accept_time = 9; */
        if (message.acceptTime !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.acceptTime);
        /* repeated uint32 lacked_npc_list = 10; */
        for (let i = 0; i < message.lackedNpcList.length; i++)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.lackedNpcList[i]);
        /* repeated uint32 finish_progress_list = 11; */
        for (let i = 0; i < message.finishProgressList.length; i++)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.finishProgressList[i]);
        /* repeated uint32 fail_progress_list = 12; */
        for (let i = 0; i < message.failProgressList.length; i++)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.failProgressList[i]);
        /* map<uint32, uint32> lacked_npc_map = 13; */
        for (let k of Object.keys(message.lackedNpcMap))
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.lackedNpcMap[k]).join();
        /* repeated uint32 lacked_place_list = 14; */
        for (let i = 0; i < message.lackedPlaceList.length; i++)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.lackedPlaceList[i]);
        /* map<uint32, uint32> lacked_place_map = 15; */
        for (let k of Object.keys(message.lackedPlaceMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.lackedPlaceMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Quest
 */
exports.Quest = new Quest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NpcPositionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NpcPositionInfo", [
            { no: 1, name: "npc_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "pos", kind: "message", T: () => exports.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 npc_id */ 1:
                    message.npcId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 2:
                    message.pos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 npc_id = 1; */
        if (message.npcId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.npcId);
        /* optional com.midnights.game.Vector pos = 2; */
        if (message.pos)
            exports.Vector.internalBinaryWrite(message.pos, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NpcPositionInfo
 */
exports.NpcPositionInfo = new NpcPositionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MailTextContent$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MailTextContent", [
            { no: 1, name: "title", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "content", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "sender", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string title */ 1:
                    message.title = reader.string();
                    break;
                case /* optional string content */ 2:
                    message.content = reader.string();
                    break;
                case /* optional string sender */ 3:
                    message.sender = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string title = 1; */
        if (message.title !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.title);
        /* optional string content = 2; */
        if (message.content !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.content);
        /* optional string sender = 3; */
        if (message.sender !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.sender);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MailTextContent
 */
exports.MailTextContent = new MailTextContent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MailItem$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MailItem", [
            { no: 1, name: "equip_param", kind: "message", T: () => exports.EquipParam },
            { no: 2, name: "delete_info", kind: "message", T: () => exports.MaterialDeleteInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.EquipParam equip_param */ 1:
                    message.equipParam = exports.EquipParam.internalBinaryRead(reader, reader.uint32(), options, message.equipParam);
                    break;
                case /* optional com.midnights.game.MaterialDeleteInfo delete_info */ 2:
                    message.deleteInfo = exports.MaterialDeleteInfo.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.EquipParam equip_param = 1; */
        if (message.equipParam)
            exports.EquipParam.internalBinaryWrite(message.equipParam, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MaterialDeleteInfo delete_info = 2; */
        if (message.deleteInfo)
            exports.MaterialDeleteInfo.internalBinaryWrite(message.deleteInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MailItem
 */
exports.MailItem = new MailItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MailData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MailData", [
            { no: 1, name: "mail_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "mail_text_content", kind: "message", T: () => exports.MailTextContent },
            { no: 7, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.MailItem },
            { no: 8, name: "send_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "expire_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "importance", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_read", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "is_attachment_got", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "argument_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "collect_state", kind: "enum", opt: true, T: () => ["com.midnights.game.MailCollectState", MailCollectState] }
        ]);
    }
    create(value) {
        const message = { itemList: [], argumentList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 mail_id */ 1:
                    message.mailId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MailTextContent mail_text_content */ 4:
                    message.mailTextContent = exports.MailTextContent.internalBinaryRead(reader, reader.uint32(), options, message.mailTextContent);
                    break;
                case /* repeated com.midnights.game.MailItem item_list */ 7:
                    message.itemList.push(exports.MailItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 send_time */ 8:
                    message.sendTime = reader.uint32();
                    break;
                case /* optional uint32 expire_time */ 9:
                    message.expireTime = reader.uint32();
                    break;
                case /* optional uint32 importance */ 10:
                    message.importance = reader.uint32();
                    break;
                case /* optional bool is_read */ 11:
                    message.isRead = reader.bool();
                    break;
                case /* optional bool is_attachment_got */ 12:
                    message.isAttachmentGot = reader.bool();
                    break;
                case /* optional uint32 config_id */ 13:
                    message.configId = reader.uint32();
                    break;
                case /* repeated string argument_list */ 14:
                    message.argumentList.push(reader.string());
                    break;
                case /* optional com.midnights.game.MailCollectState collect_state */ 15:
                    message.collectState = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 mail_id = 1; */
        if (message.mailId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.mailId);
        /* optional com.midnights.game.MailTextContent mail_text_content = 4; */
        if (message.mailTextContent)
            exports.MailTextContent.internalBinaryWrite(message.mailTextContent, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.MailItem item_list = 7; */
        for (let i = 0; i < message.itemList.length; i++)
            exports.MailItem.internalBinaryWrite(message.itemList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 send_time = 8; */
        if (message.sendTime !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sendTime);
        /* optional uint32 expire_time = 9; */
        if (message.expireTime !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.expireTime);
        /* optional uint32 importance = 10; */
        if (message.importance !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.importance);
        /* optional bool is_read = 11; */
        if (message.isRead !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isRead);
        /* optional bool is_attachment_got = 12; */
        if (message.isAttachmentGot !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isAttachmentGot);
        /* optional uint32 config_id = 13; */
        if (message.configId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.configId);
        /* repeated string argument_list = 14; */
        for (let i = 0; i < message.argumentList.length; i++)
            writer.tag(14, runtime_2.WireType.LengthDelimited).string(message.argumentList[i]);
        /* optional com.midnights.game.MailCollectState collect_state = 15; */
        if (message.collectState !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.collectState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MailData
 */
exports.MailData = new MailData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OnlinePlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OnlinePlayerInfo", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "player_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mp_setting_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MpSettingType", MpSettingType] },
            { no: 6, name: "cur_player_num_in_world", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "world_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "name_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "blacklist_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "signature", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "profile_picture", kind: "message", T: () => exports.ProfilePicture },
            { no: 13, name: "psn_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { blacklistUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional string nickname */ 2:
                    message.nickname = reader.string();
                    break;
                case /* optional uint32 player_level */ 3:
                    message.playerLevel = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 4:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MpSettingType mp_setting_type */ 5:
                    message.mpSettingType = reader.int32();
                    break;
                case /* optional uint32 cur_player_num_in_world */ 6:
                    message.curPlayerNumInWorld = reader.uint32();
                    break;
                case /* optional uint32 world_level */ 7:
                    message.worldLevel = reader.uint32();
                    break;
                case /* optional string online_id */ 8:
                    message.onlineId = reader.string();
                    break;
                case /* optional uint32 name_card_id */ 9:
                    message.nameCardId = reader.uint32();
                    break;
                case /* repeated uint32 blacklist_uid_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.blacklistUidList.push(reader.uint32());
                    else
                        message.blacklistUidList.push(reader.uint32());
                    break;
                case /* optional string signature */ 11:
                    message.signature = reader.string();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 12:
                    message.profilePicture = exports.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* optional string psn_id */ 13:
                    message.psnId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional string nickname = 2; */
        if (message.nickname !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.nickname);
        /* optional uint32 player_level = 3; */
        if (message.playerLevel !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.playerLevel);
        /* optional uint32 avatar_id = 4; */
        if (message.avatarId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional com.midnights.game.MpSettingType mp_setting_type = 5; */
        if (message.mpSettingType !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.mpSettingType);
        /* optional uint32 cur_player_num_in_world = 6; */
        if (message.curPlayerNumInWorld !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.curPlayerNumInWorld);
        /* optional uint32 world_level = 7; */
        if (message.worldLevel !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.worldLevel);
        /* optional string online_id = 8; */
        if (message.onlineId !== undefined)
            writer.tag(8, runtime_2.WireType.LengthDelimited).string(message.onlineId);
        /* optional uint32 name_card_id = 9; */
        if (message.nameCardId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.nameCardId);
        /* repeated uint32 blacklist_uid_list = 10; */
        for (let i = 0; i < message.blacklistUidList.length; i++)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.blacklistUidList[i]);
        /* optional string signature = 11; */
        if (message.signature !== undefined)
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.signature);
        /* optional com.midnights.game.ProfilePicture profile_picture = 12; */
        if (message.profilePicture)
            exports.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional string psn_id = 13; */
        if (message.psnId !== undefined)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.psnId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OnlinePlayerInfo
 */
exports.OnlinePlayerInfo = new OnlinePlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Birthday$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Birthday", [
            { no: 1, name: "month", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "day", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 month */ 1:
                    message.month = reader.uint32();
                    break;
                case /* optional uint32 day */ 2:
                    message.day = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 month = 1; */
        if (message.month !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.month);
        /* optional uint32 day = 2; */
        if (message.day !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.day);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Birthday
 */
exports.Birthday = new Birthday$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MapMarkPoint$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MapMarkPoint", [
            { no: 1, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "pos", kind: "message", T: () => exports.Vector },
            { no: 4, name: "point_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MapMarkPointType", MapMarkPointType] },
            { no: 5, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "from_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MapMarkFromType", MapMarkFromType, "MAP_MARK_FROM_TYPE_"] },
            { no: 7, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional string name */ 2:
                    message.name = reader.string();
                    break;
                case /* optional com.midnights.game.Vector pos */ 3:
                    message.pos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.MapMarkPointType point_type */ 4:
                    message.pointType = reader.int32();
                    break;
                case /* optional uint32 monster_id */ 5:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MapMarkFromType from_type */ 6:
                    message.fromType = reader.int32();
                    break;
                case /* optional uint32 quest_id */ 7:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 1; */
        if (message.sceneId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional string name = 2; */
        if (message.name !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.name);
        /* optional com.midnights.game.Vector pos = 3; */
        if (message.pos)
            exports.Vector.internalBinaryWrite(message.pos, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MapMarkPointType point_type = 4; */
        if (message.pointType !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.pointType);
        /* optional uint32 monster_id = 5; */
        if (message.monsterId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.monsterId);
        /* optional com.midnights.game.MapMarkFromType from_type = 6; */
        if (message.fromType !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.fromType);
        /* optional uint32 quest_id = 7; */
        if (message.questId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MapMarkPoint
 */
exports.MapMarkPoint = new MapMarkPoint$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassiveWaterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveWaterInfo", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 id */ 1:
                    message.id = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int64 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int64(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveWaterInfo
 */
exports.MassiveWaterInfo = new MassiveWaterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassiveGrassInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveGrassInfo", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "center", kind: "message", T: () => exports.Vector },
            { no: 3, name: "size", kind: "message", T: () => exports.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector center */ 2:
                    message.center = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector size */ 3:
                    message.size = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.size);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.id);
        /* optional com.midnights.game.Vector center = 2; */
        if (message.center)
            exports.Vector.internalBinaryWrite(message.center, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector size = 3; */
        if (message.size)
            exports.Vector.internalBinaryWrite(message.size, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveGrassInfo
 */
exports.MassiveGrassInfo = new MassiveGrassInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassiveBoxInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveBoxInfo", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "configId", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "center", kind: "message", T: () => exports.Vector },
            { no: 4, name: "extents", kind: "message", T: () => exports.Vector },
            { no: 5, name: "up", kind: "message", T: () => exports.Vector },
            { no: 6, name: "forward", kind: "message", T: () => exports.Vector },
            { no: 7, name: "right", kind: "message", T: () => exports.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* optional uint32 configId */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector center */ 3:
                    message.center = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector extents */ 4:
                    message.extents = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                case /* optional com.midnights.game.Vector up */ 5:
                    message.up = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.up);
                    break;
                case /* optional com.midnights.game.Vector forward */ 6:
                    message.forward = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
                    break;
                case /* optional com.midnights.game.Vector right */ 7:
                    message.right = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.right);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.id);
        /* optional uint32 configId = 2; */
        if (message.configId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.configId);
        /* optional com.midnights.game.Vector center = 3; */
        if (message.center)
            exports.Vector.internalBinaryWrite(message.center, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector extents = 4; */
        if (message.extents)
            exports.Vector.internalBinaryWrite(message.extents, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector up = 5; */
        if (message.up)
            exports.Vector.internalBinaryWrite(message.up, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector forward = 6; */
        if (message.forward)
            exports.Vector.internalBinaryWrite(message.forward, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector right = 7; */
        if (message.right)
            exports.Vector.internalBinaryWrite(message.right, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveBoxInfo
 */
exports.MassiveBoxInfo = new MassiveBoxInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientMassiveEntity$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientMassiveEntity", [
            { no: 1, name: "entity_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "obj_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "water_info", kind: "message", oneof: "entityInfo", T: () => exports.MassiveWaterInfo },
            { no: 5, name: "grass_info", kind: "message", oneof: "entityInfo", T: () => exports.MassiveGrassInfo },
            { no: 6, name: "box_info", kind: "message", oneof: "entityInfo", T: () => exports.MassiveBoxInfo }
        ]);
    }
    create(value) {
        const message = { entityInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_type */ 1:
                    message.entityType = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* optional int64 obj_id */ 3:
                    message.objId = reader.int64().toBigInt();
                    break;
                case /* com.midnights.game.MassiveWaterInfo water_info */ 4:
                    message.entityInfo = {
                        oneofKind: "waterInfo",
                        waterInfo: exports.MassiveWaterInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.waterInfo)
                    };
                    break;
                case /* com.midnights.game.MassiveGrassInfo grass_info */ 5:
                    message.entityInfo = {
                        oneofKind: "grassInfo",
                        grassInfo: exports.MassiveGrassInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.grassInfo)
                    };
                    break;
                case /* com.midnights.game.MassiveBoxInfo box_info */ 6:
                    message.entityInfo = {
                        oneofKind: "boxInfo",
                        boxInfo: exports.MassiveBoxInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.boxInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_type = 1; */
        if (message.entityType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityType);
        /* optional uint32 config_id = 2; */
        if (message.configId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.configId);
        /* optional int64 obj_id = 3; */
        if (message.objId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int64(message.objId);
        /* com.midnights.game.MassiveWaterInfo water_info = 4; */
        if (message.entityInfo.oneofKind === "waterInfo")
            exports.MassiveWaterInfo.internalBinaryWrite(message.entityInfo.waterInfo, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MassiveGrassInfo grass_info = 5; */
        if (message.entityInfo.oneofKind === "grassInfo")
            exports.MassiveGrassInfo.internalBinaryWrite(message.entityInfo.grassInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MassiveBoxInfo box_info = 6; */
        if (message.entityInfo.oneofKind === "boxInfo")
            exports.MassiveBoxInfo.internalBinaryWrite(message.entityInfo.boxInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientMassiveEntity
 */
exports.ClientMassiveEntity = new ClientMassiveEntity$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShapeSphere$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShapeSphere", [
            { no: 1, name: "center", kind: "message", T: () => exports.Vector },
            { no: 2, name: "radius", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector center */ 1:
                    message.center = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional float radius */ 2:
                    message.radius = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector center = 1; */
        if (message.center)
            exports.Vector.internalBinaryWrite(message.center, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional float radius = 2; */
        if (message.radius !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.radius);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShapeSphere
 */
exports.ShapeSphere = new ShapeSphere$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShapeBox$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShapeBox", [
            { no: 1, name: "center", kind: "message", T: () => exports.Vector },
            { no: 2, name: "axis0", kind: "message", T: () => exports.Vector },
            { no: 3, name: "axis1", kind: "message", T: () => exports.Vector },
            { no: 4, name: "axis2", kind: "message", T: () => exports.Vector },
            { no: 5, name: "extents", kind: "message", T: () => exports.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector center */ 1:
                    message.center = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector axis0 */ 2:
                    message.axis0 = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis0);
                    break;
                case /* optional com.midnights.game.Vector axis1 */ 3:
                    message.axis1 = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis1);
                    break;
                case /* optional com.midnights.game.Vector axis2 */ 4:
                    message.axis2 = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis2);
                    break;
                case /* optional com.midnights.game.Vector extents */ 5:
                    message.extents = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector center = 1; */
        if (message.center)
            exports.Vector.internalBinaryWrite(message.center, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector axis0 = 2; */
        if (message.axis0)
            exports.Vector.internalBinaryWrite(message.axis0, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector axis1 = 3; */
        if (message.axis1)
            exports.Vector.internalBinaryWrite(message.axis1, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector axis2 = 4; */
        if (message.axis2)
            exports.Vector.internalBinaryWrite(message.axis2, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector extents = 5; */
        if (message.extents)
            exports.Vector.internalBinaryWrite(message.extents, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShapeBox
 */
exports.ShapeBox = new ShapeBox$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerMassiveEntity$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerMassiveEntity", [
            { no: 1, name: "entity_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "runtime_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "obj_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "water_info", kind: "message", oneof: "entityInfo", T: () => exports.MassiveWaterInfo },
            { no: 7, name: "grass_info", kind: "message", oneof: "entityInfo", T: () => exports.MassiveGrassInfo },
            { no: 8, name: "box_info", kind: "message", oneof: "entityInfo", T: () => exports.MassiveBoxInfo }
        ]);
    }
    create(value) {
        const message = { entityInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_type */ 1:
                    message.entityType = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 runtime_id */ 3:
                    message.runtimeId = reader.uint32();
                    break;
                case /* optional uint32 authority_peer_id */ 4:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional int64 obj_id */ 5:
                    message.objId = reader.int64().toBigInt();
                    break;
                case /* com.midnights.game.MassiveWaterInfo water_info */ 6:
                    message.entityInfo = {
                        oneofKind: "waterInfo",
                        waterInfo: exports.MassiveWaterInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.waterInfo)
                    };
                    break;
                case /* com.midnights.game.MassiveGrassInfo grass_info */ 7:
                    message.entityInfo = {
                        oneofKind: "grassInfo",
                        grassInfo: exports.MassiveGrassInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.grassInfo)
                    };
                    break;
                case /* com.midnights.game.MassiveBoxInfo box_info */ 8:
                    message.entityInfo = {
                        oneofKind: "boxInfo",
                        boxInfo: exports.MassiveBoxInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.boxInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_type = 1; */
        if (message.entityType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityType);
        /* optional uint32 config_id = 2; */
        if (message.configId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.configId);
        /* optional uint32 runtime_id = 3; */
        if (message.runtimeId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.runtimeId);
        /* optional uint32 authority_peer_id = 4; */
        if (message.authorityPeerId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        /* optional int64 obj_id = 5; */
        if (message.objId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int64(message.objId);
        /* com.midnights.game.MassiveWaterInfo water_info = 6; */
        if (message.entityInfo.oneofKind === "waterInfo")
            exports.MassiveWaterInfo.internalBinaryWrite(message.entityInfo.waterInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MassiveGrassInfo grass_info = 7; */
        if (message.entityInfo.oneofKind === "grassInfo")
            exports.MassiveGrassInfo.internalBinaryWrite(message.entityInfo.grassInfo, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MassiveBoxInfo box_info = 8; */
        if (message.entityInfo.oneofKind === "boxInfo")
            exports.MassiveBoxInfo.internalBinaryWrite(message.entityInfo.boxInfo, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerMassiveEntity
 */
exports.ServerMassiveEntity = new ServerMassiveEntity$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassiveEntityState$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveEntityState", [
            { no: 1, name: "entity_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "obj_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "element_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_type */ 1:
                    message.entityType = reader.uint32();
                    break;
                case /* optional int64 obj_id */ 2:
                    message.objId = reader.int64().toBigInt();
                    break;
                case /* optional uint32 element_state */ 3:
                    message.elementState = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_type = 1; */
        if (message.entityType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityType);
        /* optional int64 obj_id = 2; */
        if (message.objId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int64(message.objId);
        /* optional uint32 element_state = 3; */
        if (message.elementState !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.elementState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveEntityState
 */
exports.MassiveEntityState = new MassiveEntityState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityClientData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityClientData", [
            { no: 1, name: "wind_change_scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "windmill_sync_angle", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "wind_change_target_level", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 wind_change_scene_time */ 1:
                    message.windChangeSceneTime = reader.uint32();
                    break;
                case /* optional float windmill_sync_angle */ 2:
                    message.windmillSyncAngle = reader.float();
                    break;
                case /* optional int32 wind_change_target_level */ 3:
                    message.windChangeTargetLevel = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 wind_change_scene_time = 1; */
        if (message.windChangeSceneTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.windChangeSceneTime);
        /* optional float windmill_sync_angle = 2; */
        if (message.windmillSyncAngle !== undefined)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.windmillSyncAngle);
        /* optional int32 wind_change_target_level = 3; */
        if (message.windChangeTargetLevel !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.windChangeTargetLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityClientData
 */
exports.EntityClientData = new EntityClientData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BlockInfo", [
            { no: 1, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "bin_data", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "is_dirty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 block_id */ 1:
                    message.blockId = reader.uint32();
                    break;
                case /* optional uint32 data_version */ 2:
                    message.dataVersion = reader.uint32();
                    break;
                case /* optional bytes bin_data */ 3:
                    message.binData = reader.bytes();
                    break;
                case /* optional bool is_dirty */ 4:
                    message.isDirty = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 block_id = 1; */
        if (message.blockId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.blockId);
        /* optional uint32 data_version = 2; */
        if (message.dataVersion !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.dataVersion);
        /* optional bytes bin_data = 3; */
        if (message.binData !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).bytes(message.binData);
        /* optional bool is_dirty = 4; */
        if (message.isDirty !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isDirty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BlockInfo
 */
exports.BlockInfo = new BlockInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShopMcoinProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShopMcoinProduct", [
            { no: 1, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "mcoin_base", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "mcoin_non_first", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mcoin_first", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "bought_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_audit", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* optional string price_tier */ 2:
                    message.priceTier = reader.string();
                    break;
                case /* optional uint32 mcoin_base */ 3:
                    message.mcoinBase = reader.uint32();
                    break;
                case /* optional uint32 mcoin_non_first */ 4:
                    message.mcoinNonFirst = reader.uint32();
                    break;
                case /* optional uint32 mcoin_first */ 5:
                    message.mcoinFirst = reader.uint32();
                    break;
                case /* optional uint32 bought_num */ 6:
                    message.boughtNum = reader.uint32();
                    break;
                case /* optional bool is_audit */ 7:
                    message.isAudit = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string product_id = 1; */
        if (message.productId !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.productId);
        /* optional string price_tier = 2; */
        if (message.priceTier !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.priceTier);
        /* optional uint32 mcoin_base = 3; */
        if (message.mcoinBase !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.mcoinBase);
        /* optional uint32 mcoin_non_first = 4; */
        if (message.mcoinNonFirst !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.mcoinNonFirst);
        /* optional uint32 mcoin_first = 5; */
        if (message.mcoinFirst !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.mcoinFirst);
        /* optional uint32 bought_num = 6; */
        if (message.boughtNum !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.boughtNum);
        /* optional bool is_audit = 7; */
        if (message.isAudit !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isAudit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShopMcoinProduct
 */
exports.ShopMcoinProduct = new ShopMcoinProduct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShopCardProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShopCardProduct", [
            { no: 1, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "mcoin_base", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "hcoin_per_day", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "remain_reward_days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "card_product_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 101, name: "resin_card", kind: "message", oneof: "extraCardData", T: () => exports.ShopCardProduct_ResinCard }
        ]);
    }
    create(value) {
        const message = { extraCardData: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* optional string price_tier */ 2:
                    message.priceTier = reader.string();
                    break;
                case /* optional uint32 mcoin_base */ 3:
                    message.mcoinBase = reader.uint32();
                    break;
                case /* optional uint32 hcoin_per_day */ 4:
                    message.hcoinPerDay = reader.uint32();
                    break;
                case /* optional uint32 days */ 5:
                    message.days = reader.uint32();
                    break;
                case /* optional uint32 remain_reward_days */ 6:
                    message.remainRewardDays = reader.uint32();
                    break;
                case /* optional uint32 card_product_type */ 7:
                    message.cardProductType = reader.uint32();
                    break;
                case /* com.midnights.game.ShopCardProduct.ResinCard resin_card */ 101:
                    message.extraCardData = {
                        oneofKind: "resinCard",
                        resinCard: exports.ShopCardProduct_ResinCard.internalBinaryRead(reader, reader.uint32(), options, message.extraCardData.resinCard)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string product_id = 1; */
        if (message.productId !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.productId);
        /* optional string price_tier = 2; */
        if (message.priceTier !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.priceTier);
        /* optional uint32 mcoin_base = 3; */
        if (message.mcoinBase !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.mcoinBase);
        /* optional uint32 hcoin_per_day = 4; */
        if (message.hcoinPerDay !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.hcoinPerDay);
        /* optional uint32 days = 5; */
        if (message.days !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.days);
        /* optional uint32 remain_reward_days = 6; */
        if (message.remainRewardDays !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.remainRewardDays);
        /* optional uint32 card_product_type = 7; */
        if (message.cardProductType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.cardProductType);
        /* com.midnights.game.ShopCardProduct.ResinCard resin_card = 101; */
        if (message.extraCardData.oneofKind === "resinCard")
            exports.ShopCardProduct_ResinCard.internalBinaryWrite(message.extraCardData.resinCard, writer.tag(101, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShopCardProduct
 */
exports.ShopCardProduct = new ShopCardProduct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShopCardProduct_ResinCard$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShopCardProduct.ResinCard", [
            { no: 1, name: "base_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ItemParam },
            { no: 2, name: "per_day_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ItemParam }
        ]);
    }
    create(value) {
        const message = { baseItemList: [], perDayItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ItemParam base_item_list */ 1:
                    message.baseItemList.push(exports.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ItemParam per_day_item_list */ 2:
                    message.perDayItemList.push(exports.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ItemParam base_item_list = 1; */
        for (let i = 0; i < message.baseItemList.length; i++)
            exports.ItemParam.internalBinaryWrite(message.baseItemList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemParam per_day_item_list = 2; */
        for (let i = 0; i < message.perDayItemList.length; i++)
            exports.ItemParam.internalBinaryWrite(message.perDayItemList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShopCardProduct.ResinCard
 */
exports.ShopCardProduct_ResinCard = new ShopCardProduct_ResinCard$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayProduct", [
            { no: 1, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* optional string price_tier */ 2:
                    message.priceTier = reader.string();
                    break;
                case /* optional uint32 schedule_id */ 3:
                    message.scheduleId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string product_id = 1; */
        if (message.productId !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.productId);
        /* optional string price_tier = 2; */
        if (message.priceTier !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.priceTier);
        /* optional uint32 schedule_id = 3; */
        if (message.scheduleId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.scheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayProduct
 */
exports.PlayProduct = new PlayProduct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShopConcertProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShopConcertProduct", [
            { no: 1, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "obtain_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "obtain_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "buy_times", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* optional string price_tier */ 2:
                    message.priceTier = reader.string();
                    break;
                case /* optional uint32 obtain_count */ 3:
                    message.obtainCount = reader.uint32();
                    break;
                case /* optional uint32 obtain_limit */ 4:
                    message.obtainLimit = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 5:
                    message.beginTime = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 6:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 buy_times */ 7:
                    message.buyTimes = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string product_id = 1; */
        if (message.productId !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.productId);
        /* optional string price_tier = 2; */
        if (message.priceTier !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.priceTier);
        /* optional uint32 obtain_count = 3; */
        if (message.obtainCount !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.obtainCount);
        /* optional uint32 obtain_limit = 4; */
        if (message.obtainLimit !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.obtainLimit);
        /* optional uint32 begin_time = 5; */
        if (message.beginTime !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* optional uint32 end_time = 6; */
        if (message.endTime !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.endTime);
        /* optional uint32 buy_times = 7; */
        if (message.buyTimes !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.buyTimes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShopConcertProduct
 */
exports.ShopConcertProduct = new ShopConcertProduct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashedString$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HashedString", [
            { no: 1, name: "hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 hash */ 1:
                    message.hash = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 hash = 1; */
        if (message.hash !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HashedString
 */
exports.HashedString = new HashedString$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayTeamEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayTeamEntityInfo", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gadget_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "ability_info", kind: "message", T: () => exports.AbilitySyncStateInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 player_uid */ 2:
                    message.playerUid = reader.uint32();
                    break;
                case /* optional uint32 authority_peer_id */ 3:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional uint32 gadget_config_id */ 5:
                    message.gadgetConfigId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo ability_info */ 6:
                    message.abilityInfo = exports.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 player_uid = 2; */
        if (message.playerUid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.playerUid);
        /* optional uint32 authority_peer_id = 3; */
        if (message.authorityPeerId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        /* optional uint32 gadget_config_id = 5; */
        if (message.gadgetConfigId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.gadgetConfigId);
        /* optional com.midnights.game.AbilitySyncStateInfo ability_info = 6; */
        if (message.abilityInfo)
            exports.AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayTeamEntityInfo
 */
exports.PlayTeamEntityInfo = new PlayTeamEntityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeatureBlockInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FeatureBlockInfo", [
            { no: 1, name: "feature_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 feature_type */ 1:
                    message.featureType = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 2:
                    message.endTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 feature_type = 1; */
        if (message.featureType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.featureType);
        /* optional uint32 end_time = 2; */
        if (message.endTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FeatureBlockInfo
 */
exports.FeatureBlockInfo = new FeatureBlockInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MapMarkTipsInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MapMarkTipsInfo", [
            { no: 1, name: "tips_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MapMarkTipsType", MapMarkTipsType] },
            { no: 2, name: "point_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pointIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.MapMarkTipsType tips_type */ 1:
                    message.tipsType = reader.int32();
                    break;
                case /* repeated uint32 point_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pointIdList.push(reader.uint32());
                    else
                        message.pointIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.MapMarkTipsType tips_type = 1; */
        if (message.tipsType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.tipsType);
        /* repeated uint32 point_id_list = 2; */
        for (let i = 0; i < message.pointIdList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.pointIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MapMarkTipsInfo
 */
exports.MapMarkTipsInfo = new MapMarkTipsInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExhibitionDisplayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExhibitionDisplayInfo", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "detail_param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 param */ 2:
                    message.param = reader.uint32();
                    break;
                case /* optional uint32 detail_param */ 3:
                    message.detailParam = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.id);
        /* optional uint32 param = 2; */
        if (message.param !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.param);
        /* optional uint32 detail_param = 3; */
        if (message.detailParam !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.detailParam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExhibitionDisplayInfo
 */
exports.ExhibitionDisplayInfo = new ExhibitionDisplayInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProfilePicture$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProfilePicture", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 costume_id */ 2:
                    message.costumeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 costume_id = 2; */
        if (message.costumeId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProfilePicture
 */
exports.ProfilePicture = new ProfilePicture$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RedPointData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RedPointData", [
            { no: 1, name: "red_point_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_show", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "content_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 red_point_type */ 1:
                    message.redPointType = reader.uint32();
                    break;
                case /* optional bool is_show */ 2:
                    message.isShow = reader.bool();
                    break;
                case /* optional uint32 content_id */ 3:
                    message.contentId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 red_point_type = 1; */
        if (message.redPointType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.redPointType);
        /* optional bool is_show = 2; */
        if (message.isShow !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isShow);
        /* optional uint32 content_id = 3; */
        if (message.contentId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.contentId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RedPointData
 */
exports.RedPointData = new RedPointData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointNPCData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeMarkPointNPCData", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 costume_id */ 2:
                    message.costumeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 costume_id = 2; */
        if (message.costumeId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeMarkPointNPCData
 */
exports.HomeMarkPointNPCData = new HomeMarkPointNPCData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointSuiteData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeMarkPointSuiteData", [
            { no: 1, name: "suite_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 suite_id */ 1:
                    message.suiteId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 suite_id = 1; */
        if (message.suiteId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.suiteId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeMarkPointSuiteData
 */
exports.HomeMarkPointSuiteData = new HomeMarkPointSuiteData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointFurnitureData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeMarkPointFurnitureData", [
            { no: 1, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "furniture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "furniture_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "pos", kind: "message", T: () => exports.Vector },
            { no: 6, name: "npc_data", kind: "message", oneof: "extra", T: () => exports.HomeMarkPointNPCData },
            { no: 7, name: "suite_data", kind: "message", oneof: "extra", T: () => exports.HomeMarkPointSuiteData }
        ]);
    }
    create(value) {
        const message = { extra: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 guid */ 1:
                    message.guid = reader.uint32();
                    break;
                case /* optional uint32 furniture_id */ 2:
                    message.furnitureId = reader.uint32();
                    break;
                case /* optional uint32 furniture_type */ 3:
                    message.furnitureType = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 4:
                    message.pos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* com.midnights.game.HomeMarkPointNPCData npc_data */ 6:
                    message.extra = {
                        oneofKind: "npcData",
                        npcData: exports.HomeMarkPointNPCData.internalBinaryRead(reader, reader.uint32(), options, message.extra.npcData)
                    };
                    break;
                case /* com.midnights.game.HomeMarkPointSuiteData suite_data */ 7:
                    message.extra = {
                        oneofKind: "suiteData",
                        suiteData: exports.HomeMarkPointSuiteData.internalBinaryRead(reader, reader.uint32(), options, message.extra.suiteData)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 guid = 1; */
        if (message.guid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional uint32 furniture_id = 2; */
        if (message.furnitureId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.furnitureId);
        /* optional uint32 furniture_type = 3; */
        if (message.furnitureType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.furnitureType);
        /* optional com.midnights.game.Vector pos = 4; */
        if (message.pos)
            exports.Vector.internalBinaryWrite(message.pos, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.HomeMarkPointNPCData npc_data = 6; */
        if (message.extra.oneofKind === "npcData")
            exports.HomeMarkPointNPCData.internalBinaryWrite(message.extra.npcData, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.HomeMarkPointSuiteData suite_data = 7; */
        if (message.extra.oneofKind === "suiteData")
            exports.HomeMarkPointSuiteData.internalBinaryWrite(message.extra.suiteData, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeMarkPointFurnitureData
 */
exports.HomeMarkPointFurnitureData = new HomeMarkPointFurnitureData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MapAreaInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MapAreaInfo", [
            { no: 1, name: "map_area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 map_area_id */ 1:
                    message.mapAreaId = reader.uint32();
                    break;
                case /* optional bool is_open */ 2:
                    message.isOpen = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 map_area_id = 1; */
        if (message.mapAreaId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.mapAreaId);
        /* optional bool is_open = 2; */
        if (message.isOpen !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MapAreaInfo
 */
exports.MapAreaInfo = new MapAreaInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeFurnitureArrangementMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeFurnitureArrangementMuipData", [
            { no: 1, name: "furniture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "spawn_pos", kind: "message", T: () => exports.Vector },
            { no: 3, name: "spawn_rot", kind: "message", T: () => exports.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 furniture_id */ 1:
                    message.furnitureId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_pos */ 2:
                    message.spawnPos = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
                    break;
                case /* optional com.midnights.game.Vector spawn_rot */ 3:
                    message.spawnRot = exports.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnRot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 furniture_id = 1; */
        if (message.furnitureId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.furnitureId);
        /* optional com.midnights.game.Vector spawn_pos = 2; */
        if (message.spawnPos)
            exports.Vector.internalBinaryWrite(message.spawnPos, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector spawn_rot = 3; */
        if (message.spawnRot)
            exports.Vector.internalBinaryWrite(message.spawnRot, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeFurnitureArrangementMuipData
 */
exports.HomeFurnitureArrangementMuipData = new HomeFurnitureArrangementMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockArrangementMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlockArrangementMuipData", [
            { no: 1, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "furniture_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.HomeFurnitureArrangementMuipData }
        ]);
    }
    create(value) {
        const message = { furnitureDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 block_id */ 1:
                    message.blockId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.HomeFurnitureArrangementMuipData furniture_data_list */ 2:
                    message.furnitureDataList.push(exports.HomeFurnitureArrangementMuipData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 block_id = 1; */
        if (message.blockId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.blockId);
        /* repeated com.midnights.game.HomeFurnitureArrangementMuipData furniture_data_list = 2; */
        for (let i = 0; i < message.furnitureDataList.length; i++)
            exports.HomeFurnitureArrangementMuipData.internalBinaryWrite(message.furnitureDataList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlockArrangementMuipData
 */
exports.HomeBlockArrangementMuipData = new HomeBlockArrangementMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneArrangementMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSceneArrangementMuipData", [
            { no: 1, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_room", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "block_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.HomeBlockArrangementMuipData }
        ]);
    }
    create(value) {
        const message = { blockDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 module_id */ 1:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 2:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional bool is_room */ 3:
                    message.isRoom = reader.bool();
                    break;
                case /* repeated com.midnights.game.HomeBlockArrangementMuipData block_data_list */ 4:
                    message.blockDataList.push(exports.HomeBlockArrangementMuipData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 module_id = 1; */
        if (message.moduleId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.moduleId);
        /* optional uint32 scene_id = 2; */
        if (message.sceneId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional bool is_room = 3; */
        if (message.isRoom !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isRoom);
        /* repeated com.midnights.game.HomeBlockArrangementMuipData block_data_list = 4; */
        for (let i = 0; i < message.blockDataList.length; i++)
            exports.HomeBlockArrangementMuipData.internalBinaryWrite(message.blockDataList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSceneArrangementMuipData
 */
exports.HomeSceneArrangementMuipData = new HomeSceneArrangementMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBattleRecordMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonBattleRecordMuipData", [
            { no: 1, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "min_cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 dungeon_guid */ 1:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 min_cost_time */ 2:
                    message.minCostTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 dungeon_guid = 1; */
        if (message.dungeonGuid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.dungeonGuid);
        /* optional uint32 min_cost_time = 2; */
        if (message.minCostTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.minCostTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonBattleRecordMuipData
 */
exports.CustomDungeonBattleRecordMuipData = new CustomDungeonBattleRecordMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCustomDungeonMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCustomDungeonMuipData", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "publish_dungeon_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "store_dungeon_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "battle_record_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CustomDungeonBattleRecordMuipData }
        ]);
    }
    create(value) {
        const message = { publishDungeonList: [], storeDungeonList: [], battleRecordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* repeated uint64 publish_dungeon_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.publishDungeonList.push(reader.uint64().toBigInt());
                    else
                        message.publishDungeonList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint64 store_dungeon_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.storeDungeonList.push(reader.uint64().toBigInt());
                    else
                        message.storeDungeonList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated com.midnights.game.CustomDungeonBattleRecordMuipData battle_record_list */ 4:
                    message.battleRecordList.push(exports.CustomDungeonBattleRecordMuipData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* repeated uint64 publish_dungeon_list = 2; */
        for (let i = 0; i < message.publishDungeonList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.publishDungeonList[i]);
        /* repeated uint64 store_dungeon_list = 3; */
        for (let i = 0; i < message.storeDungeonList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.storeDungeonList[i]);
        /* repeated com.midnights.game.CustomDungeonBattleRecordMuipData battle_record_list = 4; */
        for (let i = 0; i < message.battleRecordList.length; i++)
            exports.CustomDungeonBattleRecordMuipData.internalBinaryWrite(message.battleRecordList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCustomDungeonMuipData
 */
exports.PlayerCustomDungeonMuipData = new PlayerCustomDungeonMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSettingMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonSettingMuipData", [
            { no: 1, name: "is_arrive_finish", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "coin_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "time_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_forbid_skill", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "life_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_arrive_finish */ 1:
                    message.isArriveFinish = reader.bool();
                    break;
                case /* optional uint32 coin_limit */ 2:
                    message.coinLimit = reader.uint32();
                    break;
                case /* optional uint32 time_limit */ 3:
                    message.timeLimit = reader.uint32();
                    break;
                case /* optional bool is_forbid_skill */ 4:
                    message.isForbidSkill = reader.bool();
                    break;
                case /* optional uint32 life_num */ 5:
                    message.lifeNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_arrive_finish = 1; */
        if (message.isArriveFinish !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isArriveFinish);
        /* optional uint32 coin_limit = 2; */
        if (message.coinLimit !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.coinLimit);
        /* optional uint32 time_limit = 3; */
        if (message.timeLimit !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.timeLimit);
        /* optional bool is_forbid_skill = 4; */
        if (message.isForbidSkill !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isForbidSkill);
        /* optional uint32 life_num = 5; */
        if (message.lifeNum !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.lifeNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonSettingMuipData
 */
exports.CustomDungeonSettingMuipData = new CustomDungeonSettingMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonAbstractMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonAbstractMuipData", [
            { no: 1, name: "first_publish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "last_publish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "brick_statistics_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { brickStatisticsMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 first_publish_time */ 1:
                    message.firstPublishTime = reader.uint32();
                    break;
                case /* optional uint32 last_publish_time */ 2:
                    message.lastPublishTime = reader.uint32();
                    break;
                case /* map<uint32, uint32> brick_statistics_map */ 3:
                    this.binaryReadMap3(message.brickStatisticsMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.CustomDungeonAbstractMuipData.brick_statistics_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 first_publish_time = 1; */
        if (message.firstPublishTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.firstPublishTime);
        /* optional uint32 last_publish_time = 2; */
        if (message.lastPublishTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.lastPublishTime);
        /* map<uint32, uint32> brick_statistics_map = 3; */
        for (let k of Object.keys(message.brickStatisticsMap))
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.brickStatisticsMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonAbstractMuipData
 */
exports.CustomDungeonAbstractMuipData = new CustomDungeonAbstractMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSocialMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonSocialMuipData", [
            { no: 1, name: "play_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "like_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "store_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "win_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_num */ 1:
                    message.playNum = reader.uint32();
                    break;
                case /* optional uint32 like_num */ 2:
                    message.likeNum = reader.uint32();
                    break;
                case /* optional uint32 store_num */ 3:
                    message.storeNum = reader.uint32();
                    break;
                case /* optional uint32 win_num */ 4:
                    message.winNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 play_num = 1; */
        if (message.playNum !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.playNum);
        /* optional uint32 like_num = 2; */
        if (message.likeNum !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.likeNum);
        /* optional uint32 store_num = 3; */
        if (message.storeNum !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.storeNum);
        /* optional uint32 win_num = 4; */
        if (message.winNum !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.winNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonSocialMuipData
 */
exports.CustomDungeonSocialMuipData = new CustomDungeonSocialMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBriefMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonBriefMuipData", [
            { no: 1, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "creator_nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "setting", kind: "message", T: () => exports.CustomDungeonSettingMuipData },
            { no: 6, name: "abstract", kind: "message", T: () => exports.CustomDungeonAbstractMuipData },
            { no: 7, name: "social", kind: "message", T: () => exports.CustomDungeonSocialMuipData }
        ]);
    }
    create(value) {
        const message = { tagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 dungeon_guid */ 1:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 dungeon_id */ 2:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional string creator_nickname */ 3:
                    message.creatorNickname = reader.string();
                    break;
                case /* repeated uint32 tag_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.CustomDungeonSettingMuipData setting */ 5:
                    message.setting = exports.CustomDungeonSettingMuipData.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* optional com.midnights.game.CustomDungeonAbstractMuipData abstract */ 6:
                    message.abstract = exports.CustomDungeonAbstractMuipData.internalBinaryRead(reader, reader.uint32(), options, message.abstract);
                    break;
                case /* optional com.midnights.game.CustomDungeonSocialMuipData social */ 7:
                    message.social = exports.CustomDungeonSocialMuipData.internalBinaryRead(reader, reader.uint32(), options, message.social);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 dungeon_guid = 1; */
        if (message.dungeonGuid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.dungeonGuid);
        /* optional uint32 dungeon_id = 2; */
        if (message.dungeonId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* optional string creator_nickname = 3; */
        if (message.creatorNickname !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.creatorNickname);
        /* repeated uint32 tag_list = 4; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.tagList[i]);
        /* optional com.midnights.game.CustomDungeonSettingMuipData setting = 5; */
        if (message.setting)
            exports.CustomDungeonSettingMuipData.internalBinaryWrite(message.setting, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.CustomDungeonAbstractMuipData abstract = 6; */
        if (message.abstract)
            exports.CustomDungeonAbstractMuipData.internalBinaryWrite(message.abstract, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.CustomDungeonSocialMuipData social = 7; */
        if (message.social)
            exports.CustomDungeonSocialMuipData.internalBinaryWrite(message.social, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonBriefMuipData
 */
exports.CustomDungeonBriefMuipData = new CustomDungeonBriefMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBatchBriefMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonBatchBriefMuipData", [
            { no: 1, name: "brief_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CustomDungeonBriefMuipData }
        ]);
    }
    create(value) {
        const message = { briefList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CustomDungeonBriefMuipData brief_list */ 1:
                    message.briefList.push(exports.CustomDungeonBriefMuipData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.CustomDungeonBriefMuipData brief_list = 1; */
        for (let i = 0; i < message.briefList.length; i++)
            exports.CustomDungeonBriefMuipData.internalBinaryWrite(message.briefList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonBatchBriefMuipData
 */
exports.CustomDungeonBatchBriefMuipData = new CustomDungeonBatchBriefMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintBriefMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlueprintBriefMuipData", [
            { no: 1, name: "share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_allow_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "create_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string share_code */ 1:
                    message.shareCode = reader.string();
                    break;
                case /* optional uint32 owner_uid */ 2:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional uint32 module_id */ 3:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 block_id */ 5:
                    message.blockId = reader.uint32();
                    break;
                case /* optional bool is_allow_copy */ 6:
                    message.isAllowCopy = reader.bool();
                    break;
                case /* optional uint32 create_time */ 7:
                    message.createTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string share_code = 1; */
        if (message.shareCode !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.shareCode);
        /* optional uint32 owner_uid = 2; */
        if (message.ownerUid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.ownerUid);
        /* optional uint32 module_id = 3; */
        if (message.moduleId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.moduleId);
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 block_id = 5; */
        if (message.blockId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.blockId);
        /* optional bool is_allow_copy = 6; */
        if (message.isAllowCopy !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isAllowCopy);
        /* optional uint32 create_time = 7; */
        if (message.createTime !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.createTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlueprintBriefMuipData
 */
exports.HomeBlueprintBriefMuipData = new HomeBlueprintBriefMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintBatchBriefMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlueprintBatchBriefMuipData", [
            { no: 1, name: "brief_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.HomeBlueprintBriefMuipData },
            { no: 2, name: "not_exist_share_code_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { briefList: [], notExistShareCodeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeBlueprintBriefMuipData brief_list */ 1:
                    message.briefList.push(exports.HomeBlueprintBriefMuipData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated string not_exist_share_code_list */ 2:
                    message.notExistShareCodeList.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.HomeBlueprintBriefMuipData brief_list = 1; */
        for (let i = 0; i < message.briefList.length; i++)
            exports.HomeBlueprintBriefMuipData.internalBinaryWrite(message.briefList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated string not_exist_share_code_list = 2; */
        for (let i = 0; i < message.notExistShareCodeList.length; i++)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.notExistShareCodeList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlueprintBatchBriefMuipData
 */
exports.HomeBlueprintBatchBriefMuipData = new HomeBlueprintBatchBriefMuipData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ContentAuditInfo", [
            { no: 1, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "content", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "submit_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "audit_state", kind: "enum", opt: true, T: () => ["com.midnights.game.AuditState", AuditState] },
            { no: 5, name: "submit_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_open */ 1:
                    message.isOpen = reader.bool();
                    break;
                case /* optional string content */ 2:
                    message.content = reader.string();
                    break;
                case /* optional uint32 submit_count */ 3:
                    message.submitCount = reader.uint32();
                    break;
                case /* optional com.midnights.game.AuditState audit_state */ 4:
                    message.auditState = reader.int32();
                    break;
                case /* optional uint32 submit_limit */ 5:
                    message.submitLimit = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_open = 1; */
        if (message.isOpen !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isOpen);
        /* optional string content = 2; */
        if (message.content !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.content);
        /* optional uint32 submit_count = 3; */
        if (message.submitCount !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.submitCount);
        /* optional com.midnights.game.AuditState audit_state = 4; */
        if (message.auditState !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.auditState);
        /* optional uint32 submit_limit = 5; */
        if (message.submitLimit !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.submitLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ContentAuditInfo
 */
exports.ContentAuditInfo = new ContentAuditInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ContentAuditData", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "content", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "auto_pass_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string type */ 1:
                    message.type = reader.string();
                    break;
                case /* optional string content */ 2:
                    message.content = reader.string();
                    break;
                case /* optional uint32 auto_pass_time */ 3:
                    message.autoPassTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string type = 1; */
        if (message.type !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.type);
        /* optional string content = 2; */
        if (message.content !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.content);
        /* optional uint32 auto_pass_time = 3; */
        if (message.autoPassTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.autoPassTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ContentAuditData
 */
exports.ContentAuditData = new ContentAuditData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditField$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ContentAuditField", [
            { no: 1, name: "segment_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ContentAuditData },
            { no: 2, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { segmentList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ContentAuditData segment_list */ 1:
                    message.segmentList.push(exports.ContentAuditData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string name */ 2:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ContentAuditData segment_list = 1; */
        for (let i = 0; i < message.segmentList.length; i++)
            exports.ContentAuditData.internalBinaryWrite(message.segmentList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional string name = 2; */
        if (message.name !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ContentAuditField
 */
exports.ContentAuditField = new ContentAuditField$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditAuxiliaryField$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ContentAuditAuxiliaryField", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional string value */ 2:
                    message.value = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.name);
        /* optional string value = 2; */
        if (message.value !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ContentAuditAuxiliaryField
 */
exports.ContentAuditAuxiliaryField = new ContentAuditAuxiliaryField$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NicknameSignatureAuditData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NicknameSignatureAuditData", [
            { no: 1, name: "aid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "lang", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "queue_key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "region", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "audit_field_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ContentAuditField },
            { no: 8, name: "aux_field_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ContentAuditAuxiliaryField }
        ]);
    }
    create(value) {
        const message = { auditFieldList: [], auxFieldList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string aid */ 1:
                    message.aid = reader.string();
                    break;
                case /* optional string entity_id */ 2:
                    message.entityId = reader.string();
                    break;
                case /* optional string lang */ 3:
                    message.lang = reader.string();
                    break;
                case /* optional string queue_key */ 4:
                    message.queueKey = reader.string();
                    break;
                case /* optional string region */ 5:
                    message.region = reader.string();
                    break;
                case /* optional uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ContentAuditField audit_field_list */ 7:
                    message.auditFieldList.push(exports.ContentAuditField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ContentAuditAuxiliaryField aux_field_list */ 8:
                    message.auxFieldList.push(exports.ContentAuditAuxiliaryField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string aid = 1; */
        if (message.aid !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.aid);
        /* optional string entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.entityId);
        /* optional string lang = 3; */
        if (message.lang !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.lang);
        /* optional string queue_key = 4; */
        if (message.queueKey !== undefined)
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.queueKey);
        /* optional string region = 5; */
        if (message.region !== undefined)
            writer.tag(5, runtime_2.WireType.LengthDelimited).string(message.region);
        /* optional uint32 uid = 6; */
        if (message.uid !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.uid);
        /* repeated com.midnights.game.ContentAuditField audit_field_list = 7; */
        for (let i = 0; i < message.auditFieldList.length; i++)
            exports.ContentAuditField.internalBinaryWrite(message.auditFieldList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ContentAuditAuxiliaryField aux_field_list = 8; */
        for (let i = 0; i < message.auxFieldList.length; i++)
            exports.ContentAuditAuxiliaryField.internalBinaryWrite(message.auxFieldList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NicknameSignatureAuditData
 */
exports.NicknameSignatureAuditData = new NicknameSignatureAuditData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ActivityDungeonAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ActivityDungeonAvatar", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_trial", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional bool is_trial */ 2:
                    message.isTrial = reader.bool();
                    break;
                case /* optional uint32 costume_id */ 3:
                    message.costumeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional bool is_trial = 2; */
        if (message.isTrial !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isTrial);
        /* optional uint32 costume_id = 3; */
        if (message.costumeId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ActivityDungeonAvatar
 */
exports.ActivityDungeonAvatar = new ActivityDungeonAvatar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGChallengeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGChallengeData", [
            { no: 1, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "challenge_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 challenge_id */ 1:
                    message.challengeId = reader.uint32();
                    break;
                case /* optional uint32 challenge_type */ 2:
                    message.challengeType = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional uint32 progress */ 4:
                    message.progress = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 challenge_id = 1; */
        if (message.challengeId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.challengeId);
        /* optional uint32 challenge_type = 2; */
        if (message.challengeType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.challengeType);
        /* repeated uint32 param_list = 3; */
        for (let i = 0; i < message.paramList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.paramList[i]);
        /* optional uint32 progress = 4; */
        if (message.progress !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGChallengeData
 */
exports.GCGChallengeData = new GCGChallengeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDuelExtra$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDuelExtra", [
            { no: 1, name: "card_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "field_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_back_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_face_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 5, name: "challenge_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.GCGChallengeData },
            { no: 6, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardIdList: [], cardFaceMap: {}, challengeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 card_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardIdList.push(reader.uint32());
                    else
                        message.cardIdList.push(reader.uint32());
                    break;
                case /* optional uint32 field_id */ 2:
                    message.fieldId = reader.uint32();
                    break;
                case /* optional uint32 card_back_id */ 3:
                    message.cardBackId = reader.uint32();
                    break;
                case /* map<uint32, uint32> card_face_map */ 4:
                    this.binaryReadMap4(message.cardFaceMap, reader, options);
                    break;
                case /* repeated com.midnights.game.GCGChallengeData challenge_list */ 5:
                    message.challengeList.push(exports.GCGChallengeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 score */ 6:
                    message.score = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGDuelExtra.card_face_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 card_id_list = 1; */
        for (let i = 0; i < message.cardIdList.length; i++)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.cardIdList[i]);
        /* optional uint32 field_id = 2; */
        if (message.fieldId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fieldId);
        /* optional uint32 card_back_id = 3; */
        if (message.cardBackId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.cardBackId);
        /* map<uint32, uint32> card_face_map = 4; */
        for (let k of Object.keys(message.cardFaceMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.cardFaceMap[k]).join();
        /* repeated com.midnights.game.GCGChallengeData challenge_list = 5; */
        for (let i = 0; i < message.challengeList.length; i++)
            exports.GCGChallengeData.internalBinaryWrite(message.challengeList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 score = 6; */
        if (message.score !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDuelExtra
 */
exports.GCGDuelExtra = new GCGDuelExtra$Type();

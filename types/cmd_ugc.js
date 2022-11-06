"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckUgcStateRsp = exports.CheckUgcStateReq = exports.UgcNotify = exports.CheckUgcUpdateRsp = exports.CheckUgcUpdateReq = exports.PublishUgcRsp = exports.PublishUgcReq = exports.SaveUgcRsp = exports.SaveUgcReq = exports.GetUgcBriefInfoRsp = exports.GetUgcBriefInfoReq = exports.GetUgcRsp = exports.GetUgcReq = exports.UgcMusicBriefInfo = exports.UgcMusicRecord = exports.UgcMusicTrack = exports.UgcMusicNote = exports.RecordUsage = exports.GetUgcType = exports.UgcType = exports.CheckUgcStateRsp_CmdId = exports.CheckUgcStateReq_CmdId = exports.UgcNotify_CmdId = exports.CheckUgcUpdateRsp_CmdId = exports.CheckUgcUpdateReq_CmdId = exports.PublishUgcRsp_CmdId = exports.PublishUgcReq_CmdId = exports.SaveUgcRsp_CmdId = exports.SaveUgcReq_CmdId = exports.GetUgcBriefInfoRsp_CmdId = exports.GetUgcBriefInfoReq_CmdId = exports.GetUgcRsp_CmdId = exports.GetUgcReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.GetUgcReq.CmdId
 */
var GetUgcReq_CmdId;
(function (GetUgcReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcReq_CmdId[GetUgcReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6326;
     */
    GetUgcReq_CmdId[GetUgcReq_CmdId["CMD_ID"] = 6326] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcReq_CmdId[GetUgcReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetUgcReq_CmdId[GetUgcReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetUgcReq_CmdId[GetUgcReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetUgcReq_CmdId = exports.GetUgcReq_CmdId || (exports.GetUgcReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetUgcRsp.CmdId
 */
var GetUgcRsp_CmdId;
(function (GetUgcRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcRsp_CmdId[GetUgcRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6318;
     */
    GetUgcRsp_CmdId[GetUgcRsp_CmdId["CMD_ID"] = 6318] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcRsp_CmdId[GetUgcRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetUgcRsp_CmdId[GetUgcRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetUgcRsp_CmdId = exports.GetUgcRsp_CmdId || (exports.GetUgcRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetUgcBriefInfoReq.CmdId
 */
var GetUgcBriefInfoReq_CmdId;
(function (GetUgcBriefInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcBriefInfoReq_CmdId[GetUgcBriefInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6325;
     */
    GetUgcBriefInfoReq_CmdId[GetUgcBriefInfoReq_CmdId["CMD_ID"] = 6325] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcBriefInfoReq_CmdId[GetUgcBriefInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetUgcBriefInfoReq_CmdId[GetUgcBriefInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetUgcBriefInfoReq_CmdId[GetUgcBriefInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetUgcBriefInfoReq_CmdId = exports.GetUgcBriefInfoReq_CmdId || (exports.GetUgcBriefInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetUgcBriefInfoRsp.CmdId
 */
var GetUgcBriefInfoRsp_CmdId;
(function (GetUgcBriefInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcBriefInfoRsp_CmdId[GetUgcBriefInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6307;
     */
    GetUgcBriefInfoRsp_CmdId[GetUgcBriefInfoRsp_CmdId["CMD_ID"] = 6307] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetUgcBriefInfoRsp_CmdId[GetUgcBriefInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetUgcBriefInfoRsp_CmdId[GetUgcBriefInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetUgcBriefInfoRsp_CmdId = exports.GetUgcBriefInfoRsp_CmdId || (exports.GetUgcBriefInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveUgcReq.CmdId
 */
var SaveUgcReq_CmdId;
(function (SaveUgcReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveUgcReq_CmdId[SaveUgcReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6329;
     */
    SaveUgcReq_CmdId[SaveUgcReq_CmdId["CMD_ID"] = 6329] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveUgcReq_CmdId[SaveUgcReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveUgcReq_CmdId[SaveUgcReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveUgcReq_CmdId[SaveUgcReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SaveUgcReq_CmdId = exports.SaveUgcReq_CmdId || (exports.SaveUgcReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveUgcRsp.CmdId
 */
var SaveUgcRsp_CmdId;
(function (SaveUgcRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveUgcRsp_CmdId[SaveUgcRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6322;
     */
    SaveUgcRsp_CmdId[SaveUgcRsp_CmdId["CMD_ID"] = 6322] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveUgcRsp_CmdId[SaveUgcRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveUgcRsp_CmdId[SaveUgcRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SaveUgcRsp_CmdId = exports.SaveUgcRsp_CmdId || (exports.SaveUgcRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PublishUgcReq.CmdId
 */
var PublishUgcReq_CmdId;
(function (PublishUgcReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishUgcReq_CmdId[PublishUgcReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6344;
     */
    PublishUgcReq_CmdId[PublishUgcReq_CmdId["CMD_ID"] = 6344] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishUgcReq_CmdId[PublishUgcReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PublishUgcReq_CmdId[PublishUgcReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PublishUgcReq_CmdId[PublishUgcReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PublishUgcReq_CmdId = exports.PublishUgcReq_CmdId || (exports.PublishUgcReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PublishUgcRsp.CmdId
 */
var PublishUgcRsp_CmdId;
(function (PublishUgcRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishUgcRsp_CmdId[PublishUgcRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6349;
     */
    PublishUgcRsp_CmdId[PublishUgcRsp_CmdId["CMD_ID"] = 6349] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishUgcRsp_CmdId[PublishUgcRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PublishUgcRsp_CmdId[PublishUgcRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PublishUgcRsp_CmdId = exports.PublishUgcRsp_CmdId || (exports.PublishUgcRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckUgcUpdateReq.CmdId
 */
var CheckUgcUpdateReq_CmdId;
(function (CheckUgcUpdateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcUpdateReq_CmdId[CheckUgcUpdateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6320;
     */
    CheckUgcUpdateReq_CmdId[CheckUgcUpdateReq_CmdId["CMD_ID"] = 6320] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcUpdateReq_CmdId[CheckUgcUpdateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckUgcUpdateReq_CmdId[CheckUgcUpdateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckUgcUpdateReq_CmdId[CheckUgcUpdateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CheckUgcUpdateReq_CmdId = exports.CheckUgcUpdateReq_CmdId || (exports.CheckUgcUpdateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckUgcUpdateRsp.CmdId
 */
var CheckUgcUpdateRsp_CmdId;
(function (CheckUgcUpdateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcUpdateRsp_CmdId[CheckUgcUpdateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6345;
     */
    CheckUgcUpdateRsp_CmdId[CheckUgcUpdateRsp_CmdId["CMD_ID"] = 6345] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcUpdateRsp_CmdId[CheckUgcUpdateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckUgcUpdateRsp_CmdId[CheckUgcUpdateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CheckUgcUpdateRsp_CmdId = exports.CheckUgcUpdateRsp_CmdId || (exports.CheckUgcUpdateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UgcNotify.CmdId
 */
var UgcNotify_CmdId;
(function (UgcNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UgcNotify_CmdId[UgcNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6341;
     */
    UgcNotify_CmdId[UgcNotify_CmdId["CMD_ID"] = 6341] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UgcNotify_CmdId[UgcNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UgcNotify_CmdId[UgcNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UgcNotify_CmdId = exports.UgcNotify_CmdId || (exports.UgcNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckUgcStateReq.CmdId
 */
var CheckUgcStateReq_CmdId;
(function (CheckUgcStateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcStateReq_CmdId[CheckUgcStateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6342;
     */
    CheckUgcStateReq_CmdId[CheckUgcStateReq_CmdId["CMD_ID"] = 6342] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcStateReq_CmdId[CheckUgcStateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckUgcStateReq_CmdId[CheckUgcStateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckUgcStateReq_CmdId[CheckUgcStateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CheckUgcStateReq_CmdId = exports.CheckUgcStateReq_CmdId || (exports.CheckUgcStateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckUgcStateRsp.CmdId
 */
var CheckUgcStateRsp_CmdId;
(function (CheckUgcStateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcStateRsp_CmdId[CheckUgcStateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6314;
     */
    CheckUgcStateRsp_CmdId[CheckUgcStateRsp_CmdId["CMD_ID"] = 6314] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckUgcStateRsp_CmdId[CheckUgcStateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckUgcStateRsp_CmdId[CheckUgcStateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CheckUgcStateRsp_CmdId = exports.CheckUgcStateRsp_CmdId || (exports.CheckUgcStateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UgcType
 */
var UgcType;
(function (UgcType) {
    /**
     * @generated from protobuf enum value: UGC_TYPE_NONE = 0;
     */
    UgcType[UgcType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: UGC_TYPE_MUSIC_GAME = 1;
     */
    UgcType[UgcType["MUSIC_GAME"] = 1] = "MUSIC_GAME";
})(UgcType = exports.UgcType || (exports.UgcType = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetUgcType
 */
var GetUgcType;
(function (GetUgcType) {
    /**
     * @generated from protobuf enum value: GET_UGC_NONE = 0;
     */
    GetUgcType[GetUgcType["GET_UGC_NONE"] = 0] = "GET_UGC_NONE";
    /**
     * @generated from protobuf enum value: GET_UGC_TYPE_MINE = 1;
     */
    GetUgcType[GetUgcType["GET_UGC_TYPE_MINE"] = 1] = "GET_UGC_TYPE_MINE";
    /**
     * @generated from protobuf enum value: GET_UGC_TYPE_PUBLISH = 2;
     */
    GetUgcType[GetUgcType["GET_UGC_TYPE_PUBLISH"] = 2] = "GET_UGC_TYPE_PUBLISH";
})(GetUgcType = exports.GetUgcType || (exports.GetUgcType = {}));
/**
 * @generated from protobuf enum com.midnights.game.RecordUsage
 */
var RecordUsage;
(function (RecordUsage) {
    /**
     * @generated from protobuf enum value: UGC_RECORD_USAGE_NONE = 0;
     */
    RecordUsage[RecordUsage["UGC_RECORD_USAGE_NONE"] = 0] = "UGC_RECORD_USAGE_NONE";
    /**
     * @generated from protobuf enum value: UGC_RECORD_USAGE_IMPORT = 1;
     */
    RecordUsage[RecordUsage["UGC_RECORD_USAGE_IMPORT"] = 1] = "UGC_RECORD_USAGE_IMPORT";
    /**
     * @generated from protobuf enum value: UGC_RECORD_USAGE_PLAY = 2;
     */
    RecordUsage[RecordUsage["UGC_RECORD_USAGE_PLAY"] = 2] = "UGC_RECORD_USAGE_PLAY";
    /**
     * @generated from protobuf enum value: UGC_RECORD_USAGE_TRIAL = 3;
     */
    RecordUsage[RecordUsage["UGC_RECORD_USAGE_TRIAL"] = 3] = "UGC_RECORD_USAGE_TRIAL";
    /**
     * @generated from protobuf enum value: UGC_RECORD_USAGE_COMPARE = 4;
     */
    RecordUsage[RecordUsage["UGC_RECORD_USAGE_COMPARE"] = 4] = "UGC_RECORD_USAGE_COMPARE";
})(RecordUsage = exports.RecordUsage || (exports.RecordUsage = {}));
// @generated message type with reflection information, may provide speed optimized methods
class UgcMusicNote$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UgcMusicNote", [
            { no: 12, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 start_time */ 12:
                    message.startTime = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 5:
                    message.endTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 start_time = 12; */
        if (message.startTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.startTime);
        /* optional uint32 end_time = 5; */
        if (message.endTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UgcMusicNote
 */
exports.UgcMusicNote = new UgcMusicNote$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UgcMusicTrack$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UgcMusicTrack", [
            { no: 6, name: "music_note_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.UgcMusicNote }
        ]);
    }
    create(value) {
        const message = { musicNoteList: [] };
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
                case /* repeated com.midnights.game.UgcMusicNote music_note_list */ 6:
                    message.musicNoteList.push(exports.UgcMusicNote.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.UgcMusicNote music_note_list = 6; */
        for (let i = 0; i < message.musicNoteList.length; i++)
            exports.UgcMusicNote.internalBinaryWrite(message.musicNoteList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UgcMusicTrack
 */
exports.UgcMusicTrack = new UgcMusicTrack$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UgcMusicRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UgcMusicRecord", [
            { no: 4, name: "music_track_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.UgcMusicTrack },
            { no: 13, name: "music_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { musicTrackList: [] };
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
                case /* repeated com.midnights.game.UgcMusicTrack music_track_list */ 4:
                    message.musicTrackList.push(exports.UgcMusicTrack.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 music_id */ 13:
                    message.musicId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.UgcMusicTrack music_track_list = 4; */
        for (let i = 0; i < message.musicTrackList.length; i++)
            exports.UgcMusicTrack.internalBinaryWrite(message.musicTrackList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 music_id = 13; */
        if (message.musicId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.musicId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UgcMusicRecord
 */
exports.UgcMusicRecord = new UgcMusicRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UgcMusicBriefInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UgcMusicBriefInfo", [
            { no: 5, name: "import_from_ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_published", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "is_played", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "music_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1182, name: "save_page_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "save_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "creator_nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "save_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1002, name: "after_note_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 982, name: "before_note_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_psn_platform", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1822, name: "time_line_edit_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_changed_after_publish", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "publish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "max_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 576, name: "real_time_edit_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "note_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "self_max_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { afterNoteList: [], beforeNoteList: [] };
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
                case /* optional uint64 import_from_ugc_guid */ 5:
                    message.importFromUgcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional bool is_published */ 8:
                    message.isPublished = reader.bool();
                    break;
                case /* optional bool is_played */ 1:
                    message.isPlayed = reader.bool();
                    break;
                case /* optional uint32 music_id */ 2:
                    message.musicId = reader.uint32();
                    break;
                case /* optional uint32 save_page_type */ 1182:
                    message.savePageType = reader.uint32();
                    break;
                case /* optional uint32 save_idx */ 12:
                    message.saveIdx = reader.uint32();
                    break;
                case /* optional string creator_nickname */ 10:
                    message.creatorNickname = reader.string();
                    break;
                case /* optional uint32 version */ 15:
                    message.version = reader.uint32();
                    break;
                case /* optional uint32 save_time */ 3:
                    message.saveTime = reader.uint32();
                    break;
                case /* repeated uint32 after_note_list */ 1002:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.afterNoteList.push(reader.uint32());
                    else
                        message.afterNoteList.push(reader.uint32());
                    break;
                case /* repeated uint32 before_note_list */ 982:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.beforeNoteList.push(reader.uint32());
                    else
                        message.beforeNoteList.push(reader.uint32());
                    break;
                case /* optional bool is_psn_platform */ 9:
                    message.isPsnPlatform = reader.bool();
                    break;
                case /* optional uint32 time_line_edit_time */ 1822:
                    message.timeLineEditTime = reader.uint32();
                    break;
                case /* optional bool is_changed_after_publish */ 11:
                    message.isChangedAfterPublish = reader.bool();
                    break;
                case /* optional uint32 publish_time */ 13:
                    message.publishTime = reader.uint32();
                    break;
                case /* optional uint32 max_score */ 14:
                    message.maxScore = reader.uint32();
                    break;
                case /* optional uint32 real_time_edit_time */ 576:
                    message.realTimeEditTime = reader.uint32();
                    break;
                case /* optional uint32 note_count */ 7:
                    message.noteCount = reader.uint32();
                    break;
                case /* optional uint64 ugc_guid */ 4:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 self_max_score */ 6:
                    message.selfMaxScore = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 import_from_ugc_guid = 5; */
        if (message.importFromUgcGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.importFromUgcGuid);
        /* optional bool is_published = 8; */
        if (message.isPublished !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isPublished);
        /* optional bool is_played = 1; */
        if (message.isPlayed !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isPlayed);
        /* optional uint32 music_id = 2; */
        if (message.musicId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.musicId);
        /* optional uint32 save_page_type = 1182; */
        if (message.savePageType !== undefined)
            writer.tag(1182, runtime_1.WireType.Varint).uint32(message.savePageType);
        /* optional uint32 save_idx = 12; */
        if (message.saveIdx !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.saveIdx);
        /* optional string creator_nickname = 10; */
        if (message.creatorNickname !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.creatorNickname);
        /* optional uint32 version = 15; */
        if (message.version !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.version);
        /* optional uint32 save_time = 3; */
        if (message.saveTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.saveTime);
        /* repeated uint32 after_note_list = 1002; */
        if (message.afterNoteList.length) {
            writer.tag(1002, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.afterNoteList.length; i++)
                writer.uint32(message.afterNoteList[i]);
            writer.join();
        }
        /* repeated uint32 before_note_list = 982; */
        if (message.beforeNoteList.length) {
            writer.tag(982, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.beforeNoteList.length; i++)
                writer.uint32(message.beforeNoteList[i]);
            writer.join();
        }
        /* optional bool is_psn_platform = 9; */
        if (message.isPsnPlatform !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isPsnPlatform);
        /* optional uint32 time_line_edit_time = 1822; */
        if (message.timeLineEditTime !== undefined)
            writer.tag(1822, runtime_1.WireType.Varint).uint32(message.timeLineEditTime);
        /* optional bool is_changed_after_publish = 11; */
        if (message.isChangedAfterPublish !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isChangedAfterPublish);
        /* optional uint32 publish_time = 13; */
        if (message.publishTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.publishTime);
        /* optional uint32 max_score = 14; */
        if (message.maxScore !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.maxScore);
        /* optional uint32 real_time_edit_time = 576; */
        if (message.realTimeEditTime !== undefined)
            writer.tag(576, runtime_1.WireType.Varint).uint32(message.realTimeEditTime);
        /* optional uint32 note_count = 7; */
        if (message.noteCount !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.noteCount);
        /* optional uint64 ugc_guid = 4; */
        if (message.ugcGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* optional uint32 self_max_score = 6; */
        if (message.selfMaxScore !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.selfMaxScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UgcMusicBriefInfo
 */
exports.UgcMusicBriefInfo = new UgcMusicBriefInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetUgcReq", [
            { no: 8, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] },
            { no: 5, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "ugc_record_usage", kind: "enum", opt: true, T: () => ["com.midnights.game.RecordUsage", RecordUsage] },
            { no: 11, name: "is_require_brief", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "get_ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GetUgcType", GetUgcType] }
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
                case /* optional com.midnights.game.UgcType ugc_type */ 8:
                    message.ugcType = reader.int32();
                    break;
                case /* optional uint64 ugc_guid */ 5:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.RecordUsage ugc_record_usage */ 6:
                    message.ugcRecordUsage = reader.int32();
                    break;
                case /* optional bool is_require_brief */ 11:
                    message.isRequireBrief = reader.bool();
                    break;
                case /* optional com.midnights.game.GetUgcType get_ugc_type */ 13:
                    message.getUgcType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.UgcType ugc_type = 8; */
        if (message.ugcType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.ugcType);
        /* optional uint64 ugc_guid = 5; */
        if (message.ugcGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* optional com.midnights.game.RecordUsage ugc_record_usage = 6; */
        if (message.ugcRecordUsage !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.ugcRecordUsage);
        /* optional bool is_require_brief = 11; */
        if (message.isRequireBrief !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isRequireBrief);
        /* optional com.midnights.game.GetUgcType get_ugc_type = 13; */
        if (message.getUgcType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.getUgcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetUgcReq
 */
exports.GetUgcReq = new GetUgcReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetUgcRsp", [
            { no: 15, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "ugc_record_usage", kind: "enum", opt: true, T: () => ["com.midnights.game.RecordUsage", RecordUsage] },
            { no: 4, name: "music_record", kind: "message", oneof: "record", T: () => exports.UgcMusicRecord },
            { no: 1819, name: "music_brief_info", kind: "message", oneof: "brief", T: () => exports.UgcMusicBriefInfo }
        ]);
    }
    create(value) {
        const message = { record: { oneofKind: undefined }, brief: { oneofKind: undefined } };
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
                case /* optional uint64 ugc_guid */ 15:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.UgcType ugc_type */ 10:
                    message.ugcType = reader.int32();
                    break;
                case /* optional int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.RecordUsage ugc_record_usage */ 14:
                    message.ugcRecordUsage = reader.int32();
                    break;
                case /* com.midnights.game.UgcMusicRecord music_record */ 4:
                    message.record = {
                        oneofKind: "musicRecord",
                        musicRecord: exports.UgcMusicRecord.internalBinaryRead(reader, reader.uint32(), options, message.record.musicRecord)
                    };
                    break;
                case /* com.midnights.game.UgcMusicBriefInfo music_brief_info */ 1819:
                    message.brief = {
                        oneofKind: "musicBriefInfo",
                        musicBriefInfo: exports.UgcMusicBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.brief.musicBriefInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 ugc_guid = 15; */
        if (message.ugcGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* optional com.midnights.game.UgcType ugc_type = 10; */
        if (message.ugcType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.ugcType);
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.RecordUsage ugc_record_usage = 14; */
        if (message.ugcRecordUsage !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.ugcRecordUsage);
        /* com.midnights.game.UgcMusicRecord music_record = 4; */
        if (message.record.oneofKind === "musicRecord")
            exports.UgcMusicRecord.internalBinaryWrite(message.record.musicRecord, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.UgcMusicBriefInfo music_brief_info = 1819; */
        if (message.brief.oneofKind === "musicBriefInfo")
            exports.UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(1819, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetUgcRsp
 */
exports.GetUgcRsp = new GetUgcRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcBriefInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetUgcBriefInfoReq", [
            { no: 7, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] }
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
                case /* optional uint64 ugc_guid */ 7:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.UgcType ugc_type */ 10:
                    message.ugcType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 ugc_guid = 7; */
        if (message.ugcGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* optional com.midnights.game.UgcType ugc_type = 10; */
        if (message.ugcType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.ugcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetUgcBriefInfoReq
 */
exports.GetUgcBriefInfoReq = new GetUgcBriefInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcBriefInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetUgcBriefInfoRsp", [
            { no: 3, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "music_brief_info", kind: "message", oneof: "brief", T: () => exports.UgcMusicBriefInfo }
        ]);
    }
    create(value) {
        const message = { brief: { oneofKind: undefined } };
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
                case /* optional uint64 ugc_guid */ 3:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.UgcType ugc_type */ 11:
                    message.ugcType = reader.int32();
                    break;
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* com.midnights.game.UgcMusicBriefInfo music_brief_info */ 2:
                    message.brief = {
                        oneofKind: "musicBriefInfo",
                        musicBriefInfo: exports.UgcMusicBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.brief.musicBriefInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 ugc_guid = 3; */
        if (message.ugcGuid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* optional com.midnights.game.UgcType ugc_type = 11; */
        if (message.ugcType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.ugcType);
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* com.midnights.game.UgcMusicBriefInfo music_brief_info = 2; */
        if (message.brief.oneofKind === "musicBriefInfo")
            exports.UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetUgcBriefInfoRsp
 */
exports.GetUgcBriefInfoRsp = new GetUgcBriefInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveUgcReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveUgcReq", [
            { no: 11, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] },
            { no: 2, name: "music_record", kind: "message", oneof: "record", T: () => exports.UgcMusicRecord },
            { no: 1488, name: "music_brief_info", kind: "message", oneof: "brief", T: () => exports.UgcMusicBriefInfo }
        ]);
    }
    create(value) {
        const message = { record: { oneofKind: undefined }, brief: { oneofKind: undefined } };
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
                case /* optional com.midnights.game.UgcType ugc_type */ 11:
                    message.ugcType = reader.int32();
                    break;
                case /* com.midnights.game.UgcMusicRecord music_record */ 2:
                    message.record = {
                        oneofKind: "musicRecord",
                        musicRecord: exports.UgcMusicRecord.internalBinaryRead(reader, reader.uint32(), options, message.record.musicRecord)
                    };
                    break;
                case /* com.midnights.game.UgcMusicBriefInfo music_brief_info */ 1488:
                    message.brief = {
                        oneofKind: "musicBriefInfo",
                        musicBriefInfo: exports.UgcMusicBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.brief.musicBriefInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.UgcType ugc_type = 11; */
        if (message.ugcType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.ugcType);
        /* com.midnights.game.UgcMusicRecord music_record = 2; */
        if (message.record.oneofKind === "musicRecord")
            exports.UgcMusicRecord.internalBinaryWrite(message.record.musicRecord, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.UgcMusicBriefInfo music_brief_info = 1488; */
        if (message.brief.oneofKind === "musicBriefInfo")
            exports.UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(1488, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SaveUgcReq
 */
exports.SaveUgcReq = new SaveUgcReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveUgcRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveUgcRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] }
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
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 ugc_guid */ 8:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.UgcType ugc_type */ 1:
                    message.ugcType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 ugc_guid = 8; */
        if (message.ugcGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* optional com.midnights.game.UgcType ugc_type = 1; */
        if (message.ugcType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.ugcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SaveUgcRsp
 */
exports.SaveUgcRsp = new SaveUgcRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PublishUgcReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PublishUgcReq", [
            { no: 7, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] },
            { no: 12, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
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
                case /* optional com.midnights.game.UgcType ugc_type */ 7:
                    message.ugcType = reader.int32();
                    break;
                case /* optional uint64 ugc_guid */ 12:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.UgcType ugc_type = 7; */
        if (message.ugcType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.ugcType);
        /* optional uint64 ugc_guid = 12; */
        if (message.ugcGuid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PublishUgcReq
 */
exports.PublishUgcReq = new PublishUgcReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PublishUgcRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PublishUgcRsp", [
            { no: 14, name: "ugc_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] }
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
                case /* optional uint64 ugc_guid */ 14:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.UgcType ugc_type */ 13:
                    message.ugcType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 ugc_guid = 14; */
        if (message.ugcGuid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.UgcType ugc_type = 13; */
        if (message.ugcType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.ugcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PublishUgcRsp
 */
exports.PublishUgcRsp = new PublishUgcRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckUgcUpdateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CheckUgcUpdateReq", [
            { no: 13, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] }
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
                case /* optional com.midnights.game.UgcType ugc_type */ 13:
                    message.ugcType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.UgcType ugc_type = 13; */
        if (message.ugcType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.ugcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CheckUgcUpdateReq
 */
exports.CheckUgcUpdateReq = new CheckUgcUpdateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckUgcUpdateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CheckUgcUpdateRsp", [
            { no: 15, name: "update_ugc_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "ugc_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UgcType", UgcType, "UGC_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { updateUgcGuidList: [] };
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
                case /* repeated uint64 update_ugc_guid_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.updateUgcGuidList.push(reader.uint64().toBigInt());
                    else
                        message.updateUgcGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.UgcType ugc_type */ 12:
                    message.ugcType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 update_ugc_guid_list = 15; */
        if (message.updateUgcGuidList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.updateUgcGuidList.length; i++)
                writer.uint64(message.updateUgcGuidList[i]);
            writer.join();
        }
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.UgcType ugc_type = 12; */
        if (message.ugcType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.ugcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CheckUgcUpdateRsp
 */
exports.CheckUgcUpdateRsp = new CheckUgcUpdateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UgcNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UgcNotify", [
            { no: 12, name: "is_ugc_publish_ban", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "is_ugc_publish_feature_closed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "is_ugc_feature_closed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_ugc_publish_ban */ 12:
                    message.isUgcPublishBan = reader.bool();
                    break;
                case /* optional bool is_ugc_publish_feature_closed */ 8:
                    message.isUgcPublishFeatureClosed = reader.bool();
                    break;
                case /* optional bool is_ugc_feature_closed */ 15:
                    message.isUgcFeatureClosed = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_ugc_publish_ban = 12; */
        if (message.isUgcPublishBan !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isUgcPublishBan);
        /* optional bool is_ugc_publish_feature_closed = 8; */
        if (message.isUgcPublishFeatureClosed !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isUgcPublishFeatureClosed);
        /* optional bool is_ugc_feature_closed = 15; */
        if (message.isUgcFeatureClosed !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isUgcFeatureClosed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UgcNotify
 */
exports.UgcNotify = new UgcNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckUgcStateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CheckUgcStateReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CheckUgcStateReq
 */
exports.CheckUgcStateReq = new CheckUgcStateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckUgcStateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CheckUgcStateRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CheckUgcStateRsp
 */
exports.CheckUgcStateRsp = new CheckUgcStateRsp$Type();

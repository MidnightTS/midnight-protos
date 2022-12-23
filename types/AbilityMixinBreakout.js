"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinBreakout = exports.AbilityMixinBreakout_SyncType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BreakoutSyncAction_1 = require("./BreakoutSyncAction");
const BreakoutSyncSnapShot_1 = require("./BreakoutSyncSnapShot");
const BreakoutSyncFinishGame_1 = require("./BreakoutSyncFinishGame");
const BreakoutSyncPing_1 = require("./BreakoutSyncPing");
const BreakoutSyncCreateConnect_1 = require("./BreakoutSyncCreateConnect");
/**
 * @generated from protobuf enum AbilityMixinBreakout.SyncType
 */
var AbilityMixinBreakout_SyncType;
(function (AbilityMixinBreakout_SyncType) {
    /**
     * @generated from protobuf enum value: SYNC_TYPE_NONE = 0;
     */
    AbilityMixinBreakout_SyncType[AbilityMixinBreakout_SyncType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: SYNC_TYPE_CREATE_CONNECT = 1;
     */
    AbilityMixinBreakout_SyncType[AbilityMixinBreakout_SyncType["CREATE_CONNECT"] = 1] = "CREATE_CONNECT";
    /**
     * @generated from protobuf enum value: SYNC_TYPE_START_GAME = 2;
     */
    AbilityMixinBreakout_SyncType[AbilityMixinBreakout_SyncType["START_GAME"] = 2] = "START_GAME";
    /**
     * @generated from protobuf enum value: SYNC_TYPE_PING = 3;
     */
    AbilityMixinBreakout_SyncType[AbilityMixinBreakout_SyncType["PING"] = 3] = "PING";
    /**
     * @generated from protobuf enum value: SYNC_TYPE_FINISH_GAME = 4;
     */
    AbilityMixinBreakout_SyncType[AbilityMixinBreakout_SyncType["FINISH_GAME"] = 4] = "FINISH_GAME";
    /**
     * @generated from protobuf enum value: SYNC_TYPE_SNAP_SHOT = 5;
     */
    AbilityMixinBreakout_SyncType[AbilityMixinBreakout_SyncType["SNAP_SHOT"] = 5] = "SNAP_SHOT";
    /**
     * @generated from protobuf enum value: SYNC_TYPE_ACTION = 6;
     */
    AbilityMixinBreakout_SyncType[AbilityMixinBreakout_SyncType["ACTION"] = 6] = "ACTION";
})(AbilityMixinBreakout_SyncType = exports.AbilityMixinBreakout_SyncType || (exports.AbilityMixinBreakout_SyncType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinBreakout$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinBreakout", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "sync_type", kind: "enum", T: () => ["AbilityMixinBreakout.SyncType", AbilityMixinBreakout_SyncType, "SYNC_TYPE_"] },
            { no: 2, name: "sync_create_connect", kind: "message", oneof: "sync", T: () => BreakoutSyncCreateConnect_1.BreakoutSyncCreateConnect },
            { no: 1, name: "sync_ping", kind: "message", oneof: "sync", T: () => BreakoutSyncPing_1.BreakoutSyncPing },
            { no: 5, name: "sync_finish_game", kind: "message", oneof: "sync", T: () => BreakoutSyncFinishGame_1.BreakoutSyncFinishGame },
            { no: 14, name: "sync_snap_shot", kind: "message", oneof: "sync", T: () => BreakoutSyncSnapShot_1.BreakoutSyncSnapShot },
            { no: 3, name: "sync_action", kind: "message", oneof: "sync", T: () => BreakoutSyncAction_1.BreakoutSyncAction }
        ]);
    }
    create(value) {
        const message = { retcode: 0, syncType: 0, sync: { oneofKind: undefined } };
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
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* AbilityMixinBreakout.SyncType sync_type */ 4:
                    message.syncType = reader.int32();
                    break;
                case /* BreakoutSyncCreateConnect sync_create_connect */ 2:
                    message.sync = {
                        oneofKind: "syncCreateConnect",
                        syncCreateConnect: BreakoutSyncCreateConnect_1.BreakoutSyncCreateConnect.internalBinaryRead(reader, reader.uint32(), options, message.sync.syncCreateConnect)
                    };
                    break;
                case /* BreakoutSyncPing sync_ping */ 1:
                    message.sync = {
                        oneofKind: "syncPing",
                        syncPing: BreakoutSyncPing_1.BreakoutSyncPing.internalBinaryRead(reader, reader.uint32(), options, message.sync.syncPing)
                    };
                    break;
                case /* BreakoutSyncFinishGame sync_finish_game */ 5:
                    message.sync = {
                        oneofKind: "syncFinishGame",
                        syncFinishGame: BreakoutSyncFinishGame_1.BreakoutSyncFinishGame.internalBinaryRead(reader, reader.uint32(), options, message.sync.syncFinishGame)
                    };
                    break;
                case /* BreakoutSyncSnapShot sync_snap_shot */ 14:
                    message.sync = {
                        oneofKind: "syncSnapShot",
                        syncSnapShot: BreakoutSyncSnapShot_1.BreakoutSyncSnapShot.internalBinaryRead(reader, reader.uint32(), options, message.sync.syncSnapShot)
                    };
                    break;
                case /* BreakoutSyncAction sync_action */ 3:
                    message.sync = {
                        oneofKind: "syncAction",
                        syncAction: BreakoutSyncAction_1.BreakoutSyncAction.internalBinaryRead(reader, reader.uint32(), options, message.sync.syncAction)
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
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* AbilityMixinBreakout.SyncType sync_type = 4; */
        if (message.syncType !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.syncType);
        /* BreakoutSyncCreateConnect sync_create_connect = 2; */
        if (message.sync.oneofKind === "syncCreateConnect")
            BreakoutSyncCreateConnect_1.BreakoutSyncCreateConnect.internalBinaryWrite(message.sync.syncCreateConnect, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BreakoutSyncPing sync_ping = 1; */
        if (message.sync.oneofKind === "syncPing")
            BreakoutSyncPing_1.BreakoutSyncPing.internalBinaryWrite(message.sync.syncPing, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BreakoutSyncFinishGame sync_finish_game = 5; */
        if (message.sync.oneofKind === "syncFinishGame")
            BreakoutSyncFinishGame_1.BreakoutSyncFinishGame.internalBinaryWrite(message.sync.syncFinishGame, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BreakoutSyncSnapShot sync_snap_shot = 14; */
        if (message.sync.oneofKind === "syncSnapShot")
            BreakoutSyncSnapShot_1.BreakoutSyncSnapShot.internalBinaryWrite(message.sync.syncSnapShot, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BreakoutSyncAction sync_action = 3; */
        if (message.sync.oneofKind === "syncAction")
            BreakoutSyncAction_1.BreakoutSyncAction.internalBinaryWrite(message.sync.syncAction, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinBreakout
 */
exports.AbilityMixinBreakout = new AbilityMixinBreakout$Type();

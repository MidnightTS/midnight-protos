"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerBuffChangeNotify = exports.ServerBuffChangeNotify_ServerBuffChangeType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ServerBuff_1 = require("./ServerBuff");
/**
 * @generated from protobuf enum ServerBuffChangeNotify.ServerBuffChangeType
 */
var ServerBuffChangeNotify_ServerBuffChangeType;
(function (ServerBuffChangeNotify_ServerBuffChangeType) {
    /**
     * @generated from protobuf enum value: SERVER_BUFF_CHANGE_TYPE_ADD_SERVER_BUFF = 0;
     */
    ServerBuffChangeNotify_ServerBuffChangeType[ServerBuffChangeNotify_ServerBuffChangeType["ADD_SERVER_BUFF"] = 0] = "ADD_SERVER_BUFF";
    /**
     * @generated from protobuf enum value: SERVER_BUFF_CHANGE_TYPE_DEL_SERVER_BUFF = 1;
     */
    ServerBuffChangeNotify_ServerBuffChangeType[ServerBuffChangeNotify_ServerBuffChangeType["DEL_SERVER_BUFF"] = 1] = "DEL_SERVER_BUFF";
})(ServerBuffChangeNotify_ServerBuffChangeType = exports.ServerBuffChangeNotify_ServerBuffChangeType || (exports.ServerBuffChangeNotify_ServerBuffChangeType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ServerBuffChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ServerBuffChangeNotify", [
            { no: 4, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff },
            { no: 8, name: "is_creature_buff", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "server_buff_change_type", kind: "enum", T: () => ["ServerBuffChangeNotify.ServerBuffChangeType", ServerBuffChangeNotify_ServerBuffChangeType, "SERVER_BUFF_CHANGE_TYPE_"] },
            { no: 5, name: "avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { serverBuffList: [], isCreatureBuff: false, entityIdList: [], serverBuffChangeType: 0, avatarGuidList: [] };
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
                case /* repeated ServerBuff server_buff_list */ 4:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_creature_buff */ 8:
                    message.isCreatureBuff = reader.bool();
                    break;
                case /* repeated uint32 entity_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIdList.push(reader.uint32());
                    else
                        message.entityIdList.push(reader.uint32());
                    break;
                case /* ServerBuffChangeNotify.ServerBuffChangeType server_buff_change_type */ 9:
                    message.serverBuffChangeType = reader.int32();
                    break;
                case /* repeated uint64 avatar_guid_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarGuidList.push(reader.uint64().toBigInt());
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
        /* repeated ServerBuff server_buff_list = 4; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool is_creature_buff = 8; */
        if (message.isCreatureBuff !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isCreatureBuff);
        /* repeated uint32 entity_id_list = 6; */
        if (message.entityIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityIdList.length; i++)
                writer.uint32(message.entityIdList[i]);
            writer.join();
        }
        /* ServerBuffChangeNotify.ServerBuffChangeType server_buff_change_type = 9; */
        if (message.serverBuffChangeType !== 0)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.serverBuffChangeType);
        /* repeated uint64 avatar_guid_list = 5; */
        if (message.avatarGuidList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarGuidList.length; i++)
                writer.uint64(message.avatarGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ServerBuffChangeNotify
 */
exports.ServerBuffChangeNotify = new ServerBuffChangeNotify$Type();

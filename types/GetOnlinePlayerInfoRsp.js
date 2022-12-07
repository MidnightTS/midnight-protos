"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOnlinePlayerInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetOnlinePlayerInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetOnlinePlayerInfoRsp", [
            { no: 9, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "target_player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { targetUid: 0, param: 0, retcode: 0 };
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
                case /* uint32 target_uid */ 9:
                    message.targetUid = reader.uint32();
                    break;
                case /* uint32 param */ 3:
                    message.param = reader.uint32();
                    break;
                case /* OnlinePlayerInfo target_player_info */ 6:
                    message.targetPlayerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.targetPlayerInfo);
                    break;
                case /* int32 retcode */ 7:
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
        /* uint32 target_uid = 9; */
        if (message.targetUid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* uint32 param = 3; */
        if (message.param !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.param);
        /* OnlinePlayerInfo target_player_info = 6; */
        if (message.targetPlayerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.targetPlayerInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetOnlinePlayerInfoRsp
 */
exports.GetOnlinePlayerInfoRsp = new GetOnlinePlayerInfoRsp$Type();

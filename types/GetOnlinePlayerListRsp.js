"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOnlinePlayerListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetOnlinePlayerListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetOnlinePlayerListRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OnlinePlayerInfo_1.OnlinePlayerInfo }
        ]);
    }
    create(value) {
        const message = { retcode: 0, param: 0, playerInfoList: [] };
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
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 param */ 8:
                    message.param = reader.uint32();
                    break;
                case /* repeated OnlinePlayerInfo player_info_list */ 5:
                    message.playerInfoList.push(OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 param = 8; */
        if (message.param !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.param);
        /* repeated OnlinePlayerInfo player_info_list = 5; */
        for (let i = 0; i < message.playerInfoList.length; i++)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetOnlinePlayerListRsp
 */
exports.GetOnlinePlayerListRsp = new GetOnlinePlayerListRsp$Type();

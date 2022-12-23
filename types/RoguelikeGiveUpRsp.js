"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeGiveUpRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RoguelikeDungeonSettleInfo_1 = require("./RoguelikeDungeonSettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeGiveUpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("RoguelikeGiveUpRsp", [
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "settle_info", kind: "message", oneof: "info", T: () => RoguelikeDungeonSettleInfo_1.RoguelikeDungeonSettleInfo }
        ]);
    }
    create(value) {
        const message = { retcode: 0, stageId: 0, info: { oneofKind: undefined } };
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
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 stage_id */ 14:
                    message.stageId = reader.uint32();
                    break;
                case /* RoguelikeDungeonSettleInfo settle_info */ 2:
                    message.info = {
                        oneofKind: "settleInfo",
                        settleInfo: RoguelikeDungeonSettleInfo_1.RoguelikeDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.settleInfo)
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
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 stage_id = 14; */
        if (message.stageId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.stageId);
        /* RoguelikeDungeonSettleInfo settle_info = 2; */
        if (message.info.oneofKind === "settleInfo")
            RoguelikeDungeonSettleInfo_1.RoguelikeDungeonSettleInfo.internalBinaryWrite(message.info.settleInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeGiveUpRsp
 */
exports.RoguelikeGiveUpRsp = new RoguelikeGiveUpRsp$Type();

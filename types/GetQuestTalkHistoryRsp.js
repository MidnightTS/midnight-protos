"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestTalkHistoryRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetQuestTalkHistoryRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetQuestTalkHistoryRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "talk_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, parentQuestId: 0, talkIdList: [] };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 parent_quest_id */ 3:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* repeated uint32 talk_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talkIdList.push(reader.uint32());
                    else
                        message.talkIdList.push(reader.uint32());
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        /* uint32 parent_quest_id = 3; */
        if (message.parentQuestId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.parentQuestId);
        /* repeated uint32 talk_id_list = 5; */
        if (message.talkIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.talkIdList.length; i++)
                writer.uint32(message.talkIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetQuestTalkHistoryRsp
 */
exports.GetQuestTalkHistoryRsp = new GetQuestTalkHistoryRsp$Type();

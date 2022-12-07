"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeEffectDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueEffectRecord_1 = require("./RogueEffectRecord");
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeEffectDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RoguelikeEffectDataNotify", [
            { no: 3, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueEffectRecord_1.RogueEffectRecord },
            { no: 8, name: "curse_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueEffectRecord_1.RogueEffectRecord }
        ]);
    }
    create(value) {
        const message = { cardList: [], curseList: [] };
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
                case /* repeated RogueEffectRecord card_list */ 3:
                    message.cardList.push(RogueEffectRecord_1.RogueEffectRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated RogueEffectRecord curse_list */ 8:
                    message.curseList.push(RogueEffectRecord_1.RogueEffectRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated RogueEffectRecord card_list = 3; */
        for (let i = 0; i < message.cardList.length; i++)
            RogueEffectRecord_1.RogueEffectRecord.internalBinaryWrite(message.cardList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated RogueEffectRecord curse_list = 8; */
        for (let i = 0; i < message.curseList.length; i++)
            RogueEffectRecord_1.RogueEffectRecord.internalBinaryWrite(message.curseList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeEffectDataNotify
 */
exports.RoguelikeEffectDataNotify = new RoguelikeEffectDataNotify$Type();

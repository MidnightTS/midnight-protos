"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushTipsAllDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PushTipsData_1 = require("./PushTipsData");
// @generated message type with reflection information, may provide speed optimized methods
class PushTipsAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PushTipsAllDataNotify", [
            { no: 4, name: "push_tips_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PushTipsData_1.PushTipsData }
        ]);
    }
    create(value) {
        const message = { pushTipsList: [] };
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
                case /* repeated PushTipsData push_tips_list */ 4:
                    message.pushTipsList.push(PushTipsData_1.PushTipsData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated PushTipsData push_tips_list = 4; */
        for (let i = 0; i < message.pushTipsList.length; i++)
            PushTipsData_1.PushTipsData.internalBinaryWrite(message.pushTipsList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PushTipsAllDataNotify
 */
exports.PushTipsAllDataNotify = new PushTipsAllDataNotify$Type();

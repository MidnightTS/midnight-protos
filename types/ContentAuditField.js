"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentAuditField = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ContentAuditData_1 = require("./ContentAuditData");
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditField$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ContentAuditField", [
            { no: 1, name: "segment_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContentAuditData_1.ContentAuditData },
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
                    message.segmentList.push(ContentAuditData_1.ContentAuditData.internalBinaryRead(reader, reader.uint32(), options));
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ContentAuditData segment_list = 1; */
        for (let i = 0; i < message.segmentList.length; i++)
            ContentAuditData_1.ContentAuditData.internalBinaryWrite(message.segmentList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string name = 2; */
        if (message.name !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ContentAuditField
 */
exports.ContentAuditField = new ContentAuditField$Type();

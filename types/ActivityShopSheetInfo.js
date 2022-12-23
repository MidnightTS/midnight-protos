"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityShopSheetInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityShopSheetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityShopSheetInfo", [
            { no: 1, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "sheet_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { beginTime: 0, endTime: 0, sheetId: 0 };
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
                case /* uint32 begin_time */ 1:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 end_time */ 6:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 sheet_id */ 15:
                    message.sheetId = reader.uint32();
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
        /* uint32 begin_time = 1; */
        if (message.beginTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* uint32 end_time = 6; */
        if (message.endTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.endTime);
        /* uint32 sheet_id = 15; */
        if (message.sheetId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sheetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityShopSheetInfo
 */
exports.ActivityShopSheetInfo = new ActivityShopSheetInfo$Type();

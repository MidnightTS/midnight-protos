"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetWidgetSlotRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetSlotOp_1 = require("./WidgetSlotOp");
const WidgetSlotTag_1 = require("./WidgetSlotTag");
// @generated message type with reflection information, may provide speed optimized methods
class SetWidgetSlotRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SetWidgetSlotRsp", [
            { no: 4, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "tag_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["WidgetSlotTag", WidgetSlotTag_1.WidgetSlotTag, "WIDGET_SLOT_TAG_"] },
            { no: 5, name: "op", kind: "enum", T: () => ["WidgetSlotOp", WidgetSlotOp_1.WidgetSlotOp, "WIDGET_SLOT_OP_"] }
        ]);
    }
    create(value) {
        const message = { materialId: 0, retcode: 0, tagList: [], op: 0 };
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
                case /* uint32 material_id */ 4:
                    message.materialId = reader.uint32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated WidgetSlotTag tag_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.int32());
                    else
                        message.tagList.push(reader.int32());
                    break;
                case /* WidgetSlotOp op */ 5:
                    message.op = reader.int32();
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
        /* uint32 material_id = 4; */
        if (message.materialId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.materialId);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated WidgetSlotTag tag_list = 15; */
        if (message.tagList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.int32(message.tagList[i]);
            writer.join();
        }
        /* WidgetSlotOp op = 5; */
        if (message.op !== 0)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.op);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetWidgetSlotRsp
 */
exports.SetWidgetSlotRsp = new SetWidgetSlotRsp$Type();

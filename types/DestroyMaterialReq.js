"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyMaterialReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MaterialInfo_1 = require("./MaterialInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DestroyMaterialReq$Type extends runtime_5.MessageType {
    constructor() {
        super("DestroyMaterialReq", [
            { no: 1, name: "material_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MaterialInfo_1.MaterialInfo }
        ]);
    }
    create(value) {
        const message = { materialList: [] };
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
                case /* repeated MaterialInfo material_list */ 1:
                    message.materialList.push(MaterialInfo_1.MaterialInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated MaterialInfo material_list = 1; */
        for (let i = 0; i < message.materialList.length; i++)
            MaterialInfo_1.MaterialInfo.internalBinaryWrite(message.materialList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DestroyMaterialReq
 */
exports.DestroyMaterialReq = new DestroyMaterialReq$Type();

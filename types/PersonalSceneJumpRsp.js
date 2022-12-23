"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalSceneJumpRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class PersonalSceneJumpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PersonalSceneJumpRsp", [
            { no: 3, name: "dest_scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "dest_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { destSceneId: 0, retcode: 0 };
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
                case /* uint32 dest_scene_id */ 3:
                    message.destSceneId = reader.uint32();
                    break;
                case /* Vector dest_pos */ 8:
                    message.destPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.destPos);
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
        /* uint32 dest_scene_id = 3; */
        if (message.destSceneId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.destSceneId);
        /* Vector dest_pos = 8; */
        if (message.destPos)
            Vector_1.Vector.internalBinaryWrite(message.destPos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message PersonalSceneJumpRsp
 */
exports.PersonalSceneJumpRsp = new PersonalSceneJumpRsp$Type();

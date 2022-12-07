"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectorOptionReq = exports.ProjectorOptionReq_ProjectorOpType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum ProjectorOptionReq.ProjectorOpType
 */
var ProjectorOptionReq_ProjectorOpType;
(function (ProjectorOptionReq_ProjectorOpType) {
    /**
     * @generated from protobuf enum value: PROJECTOR_OP_TYPE_NONE = 0;
     */
    ProjectorOptionReq_ProjectorOpType[ProjectorOptionReq_ProjectorOpType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: PROJECTOR_OP_TYPE_CREATE = 1;
     */
    ProjectorOptionReq_ProjectorOpType[ProjectorOptionReq_ProjectorOpType["CREATE"] = 1] = "CREATE";
    /**
     * @generated from protobuf enum value: PROJECTOR_OP_TYPE_DESTROY = 2;
     */
    ProjectorOptionReq_ProjectorOpType[ProjectorOptionReq_ProjectorOpType["DESTROY"] = 2] = "DESTROY";
})(ProjectorOptionReq_ProjectorOpType = exports.ProjectorOptionReq_ProjectorOpType || (exports.ProjectorOptionReq_ProjectorOpType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ProjectorOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ProjectorOptionReq", [
            { no: 2, name: "op_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { opType: 0, entityId: 0 };
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
                case /* uint32 op_type */ 2:
                    message.opType = reader.uint32();
                    break;
                case /* uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
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
        /* uint32 op_type = 2; */
        if (message.opType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.opType);
        /* uint32 entity_id = 8; */
        if (message.entityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ProjectorOptionReq
 */
exports.ProjectorOptionReq = new ProjectorOptionReq$Type();
